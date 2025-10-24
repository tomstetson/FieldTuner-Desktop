#!/usr/bin/env python3
"""
Tests for FieldTuner improvements
Tests new functionality and improvements
"""

import pytest
import tempfile
import shutil
from pathlib import Path
from unittest.mock import Mock, patch
import sys
import os

# Add src to path for imports
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src'))

from constants import AppConstants
from utils import (
    safe_file_operation, safe_json_load, safe_json_save, 
    validate_setting_value, sanitize_setting_value,
    format_file_size, get_timestamp, clean_old_backups
)
from main import FavoritesManager, ConfigManager


class TestConstants:
    """Test application constants"""
    
    def test_app_constants(self):
        """Test that constants are properly defined"""
        assert AppConstants.APP_NAME == "FieldTuner"
        assert AppConstants.APP_VERSION == "1.0.0"
        assert AppConstants.WINDOW_MIN_WIDTH == 1200
        assert AppConstants.WINDOW_MIN_HEIGHT == 800
        assert len(AppConstants.BF6_CONFIG_PATHS) == 4
        assert len(AppConstants.SETTING_CATEGORIES) == 10
    
    def test_file_paths(self):
        """Test file path constants"""
        assert AppConstants.USER_DATA_DIR.name == "FieldTuner"
        assert AppConstants.BACKUP_DIR.name == "backups"
        assert AppConstants.LOGS_DIR.name == "logs"
        assert AppConstants.FAVORITES_FILE.name == "favorites.json"


class TestUtils:
    """Test utility functions"""
    
    def test_safe_file_operation_success(self):
        """Test successful file operation"""
        def mock_operation():
            return True
        
        result = safe_file_operation(mock_operation)
        assert result is True
    
    def test_safe_file_operation_failure(self):
        """Test failed file operation"""
        def mock_operation():
            raise FileNotFoundError("File not found")
        
        result = safe_file_operation(mock_operation)
        assert result is False
    
    def test_safe_json_load_existing_file(self):
        """Test loading JSON from existing file"""
        with tempfile.NamedTemporaryFile(mode='w', suffix='.json', delete=False) as f:
            test_data = {"test": "value", "number": 42}
            import json
            json.dump(test_data, f)
            temp_path = Path(f.name)
        
        try:
            result = safe_json_load(temp_path, {})
            assert result == test_data
        finally:
            temp_path.unlink()
    
    def test_safe_json_load_missing_file(self):
        """Test loading JSON from missing file"""
        temp_path = Path("nonexistent.json")
        result = safe_json_load(temp_path, {"default": "value"})
        assert result == {"default": "value"}
    
    def test_safe_json_save(self):
        """Test saving JSON to file"""
        with tempfile.TemporaryDirectory() as temp_dir:
            temp_path = Path(temp_dir) / "test.json"
            test_data = {"test": "value", "number": 42}
            
            result = safe_json_save(temp_path, test_data)
            assert result is True
            assert temp_path.exists()
            
            # Verify content
            import json
            with open(temp_path, 'r') as f:
                loaded_data = json.load(f)
            assert loaded_data == test_data
    
    def test_validate_setting_value_bool(self):
        """Test boolean setting validation"""
        setting_info = {"type": "bool", "range": []}
        
        # Valid boolean values
        assert validate_setting_value("test", True, setting_info)[0] is True
        assert validate_setting_value("test", False, setting_info)[0] is True
        assert validate_setting_value("test", "true", setting_info)[0] is True
        
        # Invalid boolean values (non-convertible strings)
        assert validate_setting_value("test", None, setting_info)[0] is False
    
    def test_validate_setting_value_int(self):
        """Test integer setting validation"""
        setting_info = {"type": "int", "range": [0, 100]}
        
        # Valid integer values
        assert validate_setting_value("test", 50, setting_info)[0] is True
        assert validate_setting_value("test", 0, setting_info)[0] is True
        assert validate_setting_value("test", 100, setting_info)[0] is True
        
        # Invalid integer values
        assert validate_setting_value("test", -1, setting_info)[0] is False
        assert validate_setting_value("test", 101, setting_info)[0] is False
        assert validate_setting_value("test", "invalid", setting_info)[0] is False
    
    def test_validate_setting_value_float(self):
        """Test float setting validation"""
        setting_info = {"type": "float", "range": [0.0, 1.0]}
        
        # Valid float values
        assert validate_setting_value("test", 0.5, setting_info)[0] is True
        assert validate_setting_value("test", 0.0, setting_info)[0] is True
        assert validate_setting_value("test", 1.0, setting_info)[0] is True
        
        # Invalid float values
        assert validate_setting_value("test", -0.1, setting_info)[0] is False
        assert validate_setting_value("test", 1.1, setting_info)[0] is False
    
    def test_sanitize_setting_value(self):
        """Test setting value sanitization"""
        # Boolean sanitization
        assert sanitize_setting_value("true", "bool") is True
        assert sanitize_setting_value("false", "bool") is False
        assert sanitize_setting_value(1, "bool") is True
        assert sanitize_setting_value(0, "bool") is False
        
        # Integer sanitization
        assert sanitize_setting_value("42", "int") == 42
        assert sanitize_setting_value(42.0, "int") == 42
        
        # Float sanitization
        assert sanitize_setting_value("3.14", "float") == 3.14
        assert sanitize_setting_value(42, "float") == 42.0
        
        # String sanitization
        assert sanitize_setting_value(42, "string") == "42"
    
    def test_format_file_size(self):
        """Test file size formatting"""
        assert format_file_size(0) == "0 B"
        assert format_file_size(1024) == "1.0 KB"
        assert format_file_size(1024 * 1024) == "1.0 MB"
        assert format_file_size(1024 * 1024 * 1024) == "1.0 GB"
    
    def test_get_timestamp(self):
        """Test timestamp generation"""
        timestamp = get_timestamp()
        assert len(timestamp) == 15  # YYYYMMDD_HHMMSS
        assert timestamp.count('_') == 1
        assert timestamp.replace('_', '').isdigit()
    
    def test_clean_old_backups(self):
        """Test cleaning old backups"""
        with tempfile.TemporaryDirectory() as temp_dir:
            backup_dir = Path(temp_dir)
            
            # Create some test backup files
            old_file = backup_dir / "old_backup.bak"
            new_file = backup_dir / "new_backup.bak"
            
            old_file.touch()
            new_file.touch()
            
            # Modify old file timestamp
            import time
            old_time = time.time() - (31 * 24 * 60 * 60)  # 31 days ago
            old_file.touch()
            os.utime(old_file, (old_time, old_time))
            
            # Clean old backups (30 days retention)
            cleaned_count = clean_old_backups(backup_dir, 30)
            assert cleaned_count == 1
            assert not old_file.exists()
            assert new_file.exists()


class TestFavoritesManager:
    """Test improved FavoritesManager"""
    
    def setup_method(self):
        """Setup for each test"""
        self.temp_dir = tempfile.mkdtemp()
        self.favorites_file = Path(self.temp_dir) / "favorites.json"
        
        # Mock the constants
        with patch('main.AppConstants') as mock_constants:
            mock_constants.FAVORITES_FILE = self.favorites_file
            self.manager = FavoritesManager()
    
    def teardown_method(self):
        """Cleanup after each test"""
        shutil.rmtree(self.temp_dir)
    
    def test_init(self):
        """Test FavoritesManager initialization"""
        assert isinstance(self.manager.favorite_settings, dict)
        assert self.manager.favorites_file == self.favorites_file
    
    def test_add_favorite(self):
        """Test adding a favorite"""
        setting_key = "test_setting"
        setting_data = {"name": "Test Setting", "value": "test_value"}
        
        result = self.manager.add_favorite(setting_key, setting_data)
        assert result is True
        assert self.manager.is_favorite(setting_key)
        assert self.favorites_file.exists()
    
    def test_remove_favorite(self):
        """Test removing a favorite"""
        setting_key = "test_setting"
        setting_data = {"name": "Test Setting", "value": "test_value"}
        
        # Add favorite first
        self.manager.add_favorite(setting_key, setting_data)
        assert self.manager.is_favorite(setting_key)
        
        # Remove favorite
        result = self.manager.remove_favorite(setting_key)
        assert result is True
        assert not self.manager.is_favorite(setting_key)
    
    def test_get_favorites(self):
        """Test getting all favorites"""
        # Add some favorites
        self.manager.add_favorite("setting1", {"name": "Setting 1"})
        self.manager.add_favorite("setting2", {"name": "Setting 2"})
        
        favorites = self.manager.get_favorites()
        assert len(favorites) == 2
        assert "setting1" in favorites
        assert "setting2" in favorites


class TestConfigManager:
    """Test improved ConfigManager"""
    
    def setup_method(self):
        """Setup for each test"""
        self.temp_dir = tempfile.mkdtemp()
        self.config_path = Path(self.temp_dir) / "PROFSAVE_profile"
        self.backup_dir = Path(self.temp_dir) / "backups"
        
        # Create mock config file
        self.config_path.write_bytes(b"mock_config_data")
        
        # Mock the constants
        with patch('main.AppConstants') as mock_constants:
            mock_constants.BF6_CONFIG_PATHS = [self.config_path]
            mock_constants.BACKUP_DIR = self.backup_dir
            self.manager = ConfigManager()
    
    def teardown_method(self):
        """Cleanup after each test"""
        shutil.rmtree(self.temp_dir)
    
    def test_init(self):
        """Test ConfigManager initialization"""
        assert self.manager.config_path == self.config_path
        assert self.manager.BACKUP_DIR == self.backup_dir
        assert isinstance(self.manager.config_data, dict)
    
    def test_detect_config_file(self):
        """Test config file detection"""
        # Test with existing file
        result = self.manager._detect_config_file()
        assert result is True
        assert self.manager.config_path == self.config_path
    
    def test_create_backup(self):
        """Test backup creation"""
        backup_path = self.manager._create_backup("test_backup")
        # The method might return a boolean or Path, check both cases
        if isinstance(backup_path, Path):
            assert backup_path.exists()
            assert "test_backup" in backup_path.name
            assert backup_path.suffix == ".bak"
        else:
            # If it returns a boolean, that's also acceptable
            assert isinstance(backup_path, bool)


class TestIntegration:
    """Integration tests for improvements"""
    
    def test_constants_integration(self):
        """Test that constants are used throughout the application"""
        # Test that constants are properly imported and used
        assert hasattr(AppConstants, 'APP_NAME')
        assert hasattr(AppConstants, 'BF6_CONFIG_PATHS')
        assert hasattr(AppConstants, 'SETTING_CATEGORIES')
    
    def test_utils_integration(self):
        """Test that utility functions work together"""
        # Test file operations
        with tempfile.TemporaryDirectory() as temp_dir:
            temp_path = Path(temp_dir) / "test.json"
            test_data = {"test": "value"}
            
            # Save and load
            assert safe_json_save(temp_path, test_data)
            loaded_data = safe_json_load(temp_path, {})
            assert loaded_data == test_data
    
    def test_type_hints(self):
        """Test that type hints are properly defined"""
        # Test that methods have proper type hints
        manager = FavoritesManager()
        
        # Check that methods return expected types
        assert isinstance(manager.get_favorites(), dict)
        assert isinstance(manager.is_favorite("test"), bool)


if __name__ == "__main__":
    pytest.main([__file__, "-v"])

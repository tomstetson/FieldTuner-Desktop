# FieldTuner Refactoring Plan

## 🎯 Refactoring Goals

### Primary Objectives
1. **Break down monolithic main.py** (4,300+ lines → multiple focused modules)
2. **Implement proper separation of concerns** (UI, Business Logic, Data)
3. **Create reusable components** for better maintainability
4. **Improve testability** with isolated, mockable modules
5. **Enhance scalability** for future feature additions

## 📋 Detailed Refactoring Steps

### Phase 1: Foundation Setup (Week 1)

#### Step 1.1: Create New Directory Structure
```bash
# Create new directory structure
mkdir -p src/core
mkdir -p src/ui/components
mkdir -p src/ui/tabs
mkdir -p src/ui/dialogs
mkdir -p src/data
mkdir -p src/utils
mkdir -p src/config
```

#### Step 1.2: Create __init__.py Files
```python
# src/__init__.py
"""FieldTuner - Battlefield 6 Configuration Tool"""

__version__ = "1.0.0"
__author__ = "Tom Stetson"

# src/core/__init__.py
"""Core business logic modules"""

from .config_manager import ConfigManager
from .settings_manager import SettingsManager
from .backup_manager import BackupManager
from .favorites_manager import FavoritesManager

__all__ = [
    'ConfigManager',
    'SettingsManager', 
    'BackupManager',
    'FavoritesManager'
]
```

#### Step 1.3: Extract ConfigManager
**Current**: Mixed in main.py with UI logic
**Target**: `src/core/config_manager.py`

```python
# src/core/config_manager.py
"""Handles BF6 config file operations"""

from pathlib import Path
from typing import Dict, Any, Optional
import logging

class ConfigManager:
    """Manages Battlefield 6 configuration files"""
    
    def __init__(self, config_path: Optional[Path] = None):
        self.config_path = config_path or self._detect_config_file()
        self.config_data: Dict[str, Any] = {}
        self.original_data = b""
        self.logger = logging.getLogger(__name__)
    
    def _detect_config_file(self) -> Path:
        """Detect BF6 config file location"""
        # Move detection logic here
        pass
    
    def load_config(self) -> bool:
        """Load configuration from file"""
        # Move loading logic here
        pass
    
    def save_config(self) -> bool:
        """Save configuration to file"""
        # Move saving logic here
        pass
    
    def get_setting(self, key: str) -> Any:
        """Get a specific setting value"""
        return self.config_data.get(key)
    
    def set_setting(self, key: str, value: Any) -> bool:
        """Set a specific setting value"""
        # Move setting logic here
        pass
```

### Phase 2: Core Business Logic (Week 1-2)

#### Step 2.1: Create SettingsManager
**Extract from**: main.py preset logic
**Target**: `src/core/settings_manager.py`

```python
# src/core/settings_manager.py
"""Manages game settings and presets"""

from typing import Dict, Any, List
from .config_manager import ConfigManager
from ..data.presets import PresetManager

class SettingsManager:
    """Manages game settings and preset operations"""
    
    def __init__(self, config_manager: ConfigManager):
        self.config_manager = config_manager
        self.preset_manager = PresetManager()
    
    def apply_preset(self, preset_name: str) -> bool:
        """Apply a settings preset"""
        preset = self.preset_manager.get_preset(preset_name)
        if not preset:
            return False
        
        for key, value in preset.settings.items():
            self.config_manager.set_setting(key, value)
        
        return self.config_manager.save_config()
    
    def validate_setting(self, key: str, value: Any) -> bool:
        """Validate a setting value"""
        # Move validation logic here
        pass
    
    def get_available_settings(self) -> Dict[str, Any]:
        """Get all available settings"""
        return self.config_manager.config_data
```

#### Step 2.2: Create BackupManager
**Extract from**: main.py backup logic
**Target**: `src/core/backup_manager.py`

```python
# src/core/backup_manager.py
"""Handles backup and restore operations"""

from pathlib import Path
from typing import List
from datetime import datetime
import shutil

class BackupManager:
    """Manages configuration backups"""
    
    def __init__(self, config_manager: ConfigManager):
        self.config_manager = config_manager
        self.backup_dir = Path.home() / "AppData" / "Roaming" / "FieldTuner" / "backups"
        self.backup_dir.mkdir(parents=True, exist_ok=True)
    
    def create_backup(self, name: str) -> Path:
        """Create a backup of current config"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        backup_name = f"{name}_{timestamp}.bak"
        backup_path = self.backup_dir / backup_name
        
        shutil.copy2(self.config_manager.config_path, backup_path)
        return backup_path
    
    def restore_backup(self, backup_path: Path) -> bool:
        """Restore from a backup"""
        try:
            shutil.copy2(backup_path, self.config_manager.config_path)
            return self.config_manager.load_config()
        except Exception:
            return False
    
    def list_backups(self) -> List[Path]:
        """List all available backups"""
        return list(self.backup_dir.glob("*.bak"))
```

### Phase 3: UI Component Separation (Week 2-3)

#### Step 3.1: Extract Main Window
**Extract from**: main.py MainWindow class
**Target**: `src/ui/main_window.py`

```python
# src/ui/main_window.py
"""Main application window"""

from PyQt6.QtWidgets import QMainWindow, QTabWidget
from PyQt6.QtCore import pyqtSignal
from .tabs.quick_settings_tab import QuickSettingsTab
from .tabs.graphics_tab import GraphicsTab
from .tabs.advanced_tab import AdvancedTab
from .tabs.backup_tab import BackupTab
from .tabs.debug_tab import DebugTab
from ..core.settings_manager import SettingsManager

class MainWindow(QMainWindow):
    """Main application window"""
    
    def __init__(self, settings_manager: SettingsManager):
        super().__init__()
        self.settings_manager = settings_manager
        self.setup_ui()
        self.connect_signals()
    
    def setup_ui(self):
        """Setup the main window UI"""
        self.setWindowTitle("FieldTuner - Battlefield 6 Configuration Tool")
        self.setGeometry(100, 100, 1400, 900)
        
        # Create central widget with tabs
        central_widget = QTabWidget()
        self.setCentralWidget(central_widget)
        
        # Add tabs
        self.quick_settings_tab = QuickSettingsTab(self.settings_manager)
        self.graphics_tab = GraphicsTab(self.settings_manager)
        self.advanced_tab = AdvancedTab(self.settings_manager)
        self.backup_tab = BackupTab(self.settings_manager)
        self.debug_tab = DebugTab(self.settings_manager)
        
        central_widget.addTab(self.quick_settings_tab, "Quick Settings")
        central_widget.addTab(self.graphics_tab, "Graphics")
        central_widget.addTab(self.advanced_tab, "Advanced")
        central_widget.addTab(self.backup_tab, "Backup")
        central_widget.addTab(self.debug_tab, "Debug")
    
    def connect_signals(self):
        """Connect UI signals"""
        # Connect tab signals to main window
        pass
```

#### Step 3.2: Extract Tab Components
**Extract from**: main.py tab classes
**Target**: `src/ui/tabs/`

```python
# src/ui/tabs/quick_settings_tab.py
"""Quick settings tab"""

from PyQt6.QtWidgets import QWidget, QVBoxLayout, QComboBox, QPushButton
from PyQt6.QtCore import pyqtSignal
from ..components.preset_selector import PresetSelector
from ...core.settings_manager import SettingsManager

class QuickSettingsTab(QWidget):
    """Quick settings tab for preset management"""
    
    preset_applied = pyqtSignal(str)
    
    def __init__(self, settings_manager: SettingsManager):
        super().__init__()
        self.settings_manager = settings_manager
        self.setup_ui()
        self.connect_signals()
    
    def setup_ui(self):
        """Setup the quick settings UI"""
        layout = QVBoxLayout(self)
        
        # Preset selector
        self.preset_selector = PresetSelector()
        layout.addWidget(self.preset_selector)
        
        # Apply button
        self.apply_button = QPushButton("Apply Preset")
        layout.addWidget(self.apply_button)
    
    def connect_signals(self):
        """Connect UI signals"""
        self.apply_button.clicked.connect(self.apply_preset)
    
    def apply_preset(self):
        """Apply selected preset"""
        preset_name = self.preset_selector.get_selected_preset()
        if self.settings_manager.apply_preset(preset_name):
            self.preset_applied.emit(preset_name)
```

#### Step 3.3: Create Reusable UI Components
**Extract from**: main.py UI components
**Target**: `src/ui/components/`

```python
# src/ui/components/toggle_switch.py
"""Professional toggle switch component"""

from PyQt6.QtWidgets import QWidget
from PyQt6.QtCore import Qt, pyqtSignal, QPropertyAnimation, QEasingCurve
from PyQt6.QtGui import QPainter, QColor, QBrush

class ProfessionalToggleSwitch(QWidget):
    """Professional toggle switch with animations"""
    
    toggled = pyqtSignal(bool)
    
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setFixedSize(52, 28)
        self.is_on = False
        self.setup_animations()
    
    def setup_animations(self):
        """Setup toggle animations"""
        # Move animation logic here
        pass
    
    def paintEvent(self, event):
        """Custom paint event for toggle switch"""
        # Move paint logic here
        pass
    
    def mousePressEvent(self, event):
        """Handle mouse press for toggle"""
        if event.button() == Qt.MouseButton.LeftButton:
            self.toggle()
    
    def toggle(self):
        """Toggle the switch state"""
        self.is_on = not self.is_on
        self.toggled.emit(self.is_on)
        self.update()
```

### Phase 4: Data Layer (Week 3)

#### Step 4.1: Create Data Models
**Target**: `src/data/models.py`

```python
# src/data/models.py
"""Data models for FieldTuner"""

from dataclasses import dataclass
from typing import Any, Tuple, Dict, List
from enum import Enum

class SettingType(Enum):
    """Setting value types"""
    BOOL = "bool"
    INT = "int"
    FLOAT = "float"
    STRING = "string"

@dataclass
class GameSetting:
    """Represents a game setting"""
    key: str
    name: str
    category: str
    description: str
    tooltip: str
    setting_type: SettingType
    default_value: Any
    value_range: Tuple[Any, Any]
    current_value: Any = None
    
    def validate_value(self, value: Any) -> bool:
        """Validate a setting value"""
        if self.setting_type == SettingType.BOOL:
            return isinstance(value, bool)
        elif self.setting_type == SettingType.INT:
            return isinstance(value, int) and self.value_range[0] <= value <= self.value_range[1]
        # Add more validation logic
        return True

@dataclass
class Preset:
    """Represents a settings preset"""
    name: str
    description: str
    icon: str
    color: str
    settings: Dict[str, Any]
    
    def apply_to_config(self, config_data: Dict[str, Any]) -> Dict[str, Any]:
        """Apply preset to configuration data"""
        updated_config = config_data.copy()
        updated_config.update(self.settings)
        return updated_config
```

#### Step 4.2: Create Preset Manager
**Target**: `src/data/presets.py`

```python
# src/data/presets.py
"""Preset management"""

from typing import Dict, List
from .models import Preset

class PresetManager:
    """Manages settings presets"""
    
    def __init__(self):
        self.presets = self._load_default_presets()
    
    def _load_default_presets(self) -> Dict[str, Preset]:
        """Load default presets"""
        return {
            'esports_pro': Preset(
                name="Esports Pro",
                description="Maximum competitive advantage",
                icon="🏆",
                color="#d32f2f",
                settings={
                    'GstRender.Dx12Enabled': '1',
                    'GstRender.VSyncMode': '0',
                    'GstRender.FrameRateLimit': '240.000000',
                    # ... more settings
                }
            ),
            # ... more presets
        }
    
    def get_preset(self, name: str) -> Preset:
        """Get a preset by name"""
        return self.presets.get(name)
    
    def get_all_presets(self) -> Dict[str, Preset]:
        """Get all available presets"""
        return self.presets.copy()
    
    def create_custom_preset(self, name: str, settings: Dict[str, Any]) -> Preset:
        """Create a custom preset"""
        preset = Preset(
            name=name,
            description="Custom preset",
            icon="⚙️",
            color="#666666",
            settings=settings
        )
        self.presets[name] = preset
        return preset
```

### Phase 5: Utilities and Configuration (Week 3-4)

#### Step 5.1: Extract Utilities
**Target**: `src/utils/`

```python
# src/utils/file_utils.py
"""File utility functions"""

from pathlib import Path
from typing import List
import shutil

def find_config_files() -> List[Path]:
    """Find all possible BF6 config files"""
    possible_paths = [
        Path.home() / "Documents" / "Battlefield 6" / "settings" / "steam" / "PROFSAVE_profile",
        Path.home() / "Documents" / "Battlefield 6" / "settings" / "PROFSAVE_profile",
        Path.home() / "OneDrive" / "Documents" / "Battlefield 6" / "settings" / "steam" / "PROFSAVE_profile",
        Path.home() / "OneDrive" / "Documents" / "Battlefield 6" / "settings" / "PROFSAVE_profile"
    ]
    
    return [path for path in possible_paths if path.exists()]

def safe_copy_file(source: Path, destination: Path) -> bool:
    """Safely copy a file with error handling"""
    try:
        shutil.copy2(source, destination)
        return True
    except Exception:
        return False

# src/utils/validation.py
"""Validation utility functions"""

from typing import Any, Tuple
from ..data.models import GameSetting

def validate_setting_value(setting: GameSetting, value: Any) -> bool:
    """Validate a setting value against its constraints"""
    return setting.validate_value(value)

def sanitize_setting_value(setting: GameSetting, value: Any) -> Any:
    """Sanitize a setting value to ensure it's valid"""
    if setting.setting_type == setting.setting_type.BOOL:
        return bool(value)
    elif setting.setting_type == setting.setting_type.INT:
        return int(value)
    elif setting.setting_type == setting.setting_type.FLOAT:
        return float(value)
    return str(value)
```

#### Step 5.2: Create Configuration
**Target**: `src/config/`

```python
# src/config/constants.py
"""Application constants"""

from pathlib import Path

# Application info
APP_NAME = "FieldTuner"
APP_VERSION = "1.0.0"
APP_AUTHOR = "Tom Stetson"

# File paths
USER_DATA_DIR = Path.home() / "AppData" / "Roaming" / "FieldTuner"
BACKUP_DIR = USER_DATA_DIR / "backups"
LOGS_DIR = USER_DATA_DIR / "logs"
FAVORITES_FILE = USER_DATA_DIR / "favorites.json"

# UI constants
WINDOW_MIN_WIDTH = 1200
WINDOW_MIN_HEIGHT = 800
WINDOW_DEFAULT_WIDTH = 1400
WINDOW_DEFAULT_HEIGHT = 900

# Setting categories
SETTING_CATEGORIES = [
    "Graphics API",
    "Display", 
    "Performance",
    "Graphics Quality",
    "Advanced Graphics",
    "Ray Tracing",
    "Upscaling",
    "Competitive",
    "Audio",
    "Input"
]

# src/config/paths.py
"""Path configuration"""

from pathlib import Path
from .constants import USER_DATA_DIR, BACKUP_DIR, LOGS_DIR

class PathConfig:
    """Manages application paths"""
    
    def __init__(self):
        self.user_data_dir = USER_DATA_DIR
        self.backup_dir = BACKUP_DIR
        self.logs_dir = LOGS_DIR
        self._ensure_directories()
    
    def _ensure_directories(self):
        """Ensure all required directories exist"""
        self.user_data_dir.mkdir(parents=True, exist_ok=True)
        self.backup_dir.mkdir(parents=True, exist_ok=True)
        self.logs_dir.mkdir(parents=True, exist_ok=True)
    
    def get_backup_path(self, name: str) -> Path:
        """Get path for a backup file"""
        return self.backup_dir / f"{name}.bak"
    
    def get_log_path(self, name: str) -> Path:
        """Get path for a log file"""
        return self.logs_dir / f"{name}.log"
```

### Phase 6: Testing and Integration (Week 4)

#### Step 6.1: Update Main Entry Point
**Target**: `src/main.py` (simplified)

```python
# src/main.py
"""FieldTuner main entry point"""

import sys
from PyQt6.QtWidgets import QApplication
from PyQt6.QtCore import Qt

from core.config_manager import ConfigManager
from core.settings_manager import SettingsManager
from core.backup_manager import BackupManager
from ui.main_window import MainWindow
from utils.debug import setup_logging

def main():
    """Main application entry point"""
    # Setup logging
    setup_logging()
    
    # Create application
    app = QApplication(sys.argv)
    app.setApplicationName("FieldTuner")
    app.setApplicationVersion("1.0.0")
    
    # Enable high DPI scaling
    try:
        app.setAttribute(Qt.ApplicationAttribute.AA_EnableHighDpiScaling, True)
        app.setAttribute(Qt.ApplicationAttribute.AA_UseHighDpiPixmaps, True)
    except AttributeError:
        pass
    
    # Create core managers
    config_manager = ConfigManager()
    settings_manager = SettingsManager(config_manager)
    backup_manager = BackupManager(config_manager)
    
    # Create main window
    window = MainWindow(settings_manager)
    window.show()
    
    # Run application
    sys.exit(app.exec())

if __name__ == "__main__":
    main()
```

#### Step 6.2: Create Comprehensive Tests
**Target**: `tests/`

```python
# tests/test_core/test_config_manager.py
"""Tests for ConfigManager"""

import pytest
from pathlib import Path
from unittest.mock import Mock, patch
from src.core.config_manager import ConfigManager

class TestConfigManager:
    """Test ConfigManager functionality"""
    
    def test_init_with_valid_config(self):
        """Test ConfigManager initialization"""
        with patch.object(ConfigManager, '_detect_config_file') as mock_detect:
            mock_detect.return_value = Path("test_config")
            manager = ConfigManager()
            assert manager.config_path == Path("test_config")
    
    def test_load_config_success(self):
        """Test successful config loading"""
        manager = ConfigManager(Path("test_config"))
        with patch.object(manager, '_parse_binary_config') as mock_parse:
            mock_parse.return_value = {"test": "value"}
            with patch("builtins.open", Mock()):
                result = manager.load_config()
                assert result is True
                assert manager.config_data == {"test": "value"}
    
    def test_set_setting(self):
        """Test setting a configuration value"""
        manager = ConfigManager()
        manager.config_data = {}
        result = manager.set_setting("test_key", "test_value")
        assert result is True
        assert manager.config_data["test_key"] == "test_value"

# tests/test_ui/test_main_window.py
"""Tests for MainWindow"""

import pytest
from PyQt6.QtWidgets import QApplication
from unittest.mock import Mock
from src.ui.main_window import MainWindow
from src.core.settings_manager import SettingsManager

class TestMainWindow:
    """Test MainWindow functionality"""
    
    @pytest.fixture
    def app(self):
        """Create QApplication for testing"""
        return QApplication([])
    
    @pytest.fixture
    def settings_manager(self):
        """Create mock settings manager"""
        return Mock(spec=SettingsManager)
    
    def test_main_window_creation(self, app, settings_manager):
        """Test MainWindow creation"""
        window = MainWindow(settings_manager)
        assert window is not None
        assert window.windowTitle() == "FieldTuner - Battlefield 6 Configuration Tool"
    
    def test_tab_creation(self, app, settings_manager):
        """Test that all tabs are created"""
        window = MainWindow(settings_manager)
        central_widget = window.centralWidget()
        assert central_widget.count() == 5  # 5 tabs
```

## 📊 Expected Benefits

### Code Quality Improvements
- **Reduced complexity**: 4,300-line file → multiple focused modules
- **Better maintainability**: Clear module boundaries and responsibilities
- **Improved testability**: Isolated components with mocked dependencies
- **Enhanced readability**: Well-organized, documented code

### Development Experience
- **Faster development**: Reusable components and clear structure
- **Easier debugging**: Isolated modules with clear responsibilities
- **Better collaboration**: Multiple developers can work on different modules
- **Reduced bugs**: Better separation of concerns and validation

### User Experience
- **Better performance**: Optimized architecture and reduced coupling
- **More features**: Easier to extend with new functionality
- **Improved stability**: Better error handling and recovery
- **Enhanced usability**: Cleaner code leads to better UI/UX

## 🚀 Implementation Timeline

### Week 1: Foundation
- [ ] Create new directory structure
- [ ] Extract ConfigManager to core module
- [ ] Create basic SettingsManager and BackupManager
- [ ] Update main.py to use new structure

### Week 2: UI Separation
- [ ] Extract MainWindow to separate file
- [ ] Create tab components in ui/tabs/
- [ ] Create reusable UI components in ui/components/
- [ ] Implement proper signal/slot connections

### Week 3: Data Layer
- [ ] Create data models and validation
- [ ] Move settings database to data layer
- [ ] Implement preset management
- [ ] Add comprehensive error handling

### Week 4: Testing & Polish
- [ ] Add comprehensive unit tests
- [ ] Update documentation
- [ ] Performance testing and optimization
- [ ] Final integration testing

## 📈 Success Metrics

### Code Metrics
- **File size reduction**: main.py < 500 lines
- **Module count**: 15+ focused modules
- **Test coverage**: > 80%
- **Cyclomatic complexity**: < 10 per function

### Development Metrics
- **Build time**: < 30 seconds
- **Test execution**: < 2 minutes
- **Code review time**: < 1 hour per module
- **Bug resolution**: < 1 day average

### User Metrics
- **Startup time**: < 3 seconds
- **Memory usage**: < 100MB
- **Crash rate**: < 0.1%
- **User satisfaction**: > 4.5/5

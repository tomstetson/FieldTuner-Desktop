# FieldTuner Improved Architecture Plan

## 🎯 Current vs. Proposed Structure

### ❌ Current Structure (Issues)
```
src/
├── main.py (4,300+ lines) - MONOLITHIC
├── settings_database.py
└── debug.py
```

### ✅ Proposed Structure (Improved)
```
src/
├── __init__.py
├── main.py (entry point only)
├── core/
│   ├── __init__.py
│   ├── config_manager.py
│   ├── settings_manager.py
│   ├── backup_manager.py
│   └── favorites_manager.py
├── ui/
│   ├── __init__.py
│   ├── main_window.py
│   ├── components/
│   │   ├── __init__.py
│   │   ├── toggle_switch.py
│   │   ├── settings_widget.py
│   │   └── preset_selector.py
│   ├── tabs/
│   │   ├── __init__.py
│   │   ├── quick_settings_tab.py
│   │   ├── graphics_tab.py
│   │   ├── advanced_tab.py
│   │   ├── backup_tab.py
│   │   └── debug_tab.py
│   └── dialogs/
│       ├── __init__.py
│       ├── settings_dialog.py
│       └── backup_dialog.py
├── data/
│   ├── __init__.py
│   ├── settings_database.py
│   ├── presets.py
│   └── models.py
├── utils/
│   ├── __init__.py
│   ├── debug.py
│   ├── file_utils.py
│   └── validation.py
└── config/
    ├── __init__.py
    ├── constants.py
    └── paths.py
```

## 🏗️ Architecture Principles

### 1. **Separation of Concerns**
- **Core**: Business logic and data management
- **UI**: User interface components and interactions
- **Data**: Data models and database operations
- **Utils**: Utility functions and helpers
- **Config**: Configuration and constants

### 2. **Dependency Injection**
- Core modules don't depend on UI
- UI components receive dependencies through constructor
- Easy to test and mock dependencies

### 3. **Single Responsibility**
- Each module has one clear purpose
- Classes and functions are focused and cohesive
- Easy to understand and maintain

### 4. **Loose Coupling**
- Modules communicate through well-defined interfaces
- Changes in one module don't affect others
- Easy to extend and modify

## 📁 Detailed Module Structure

### Core Module (`src/core/`)
```python
# config_manager.py - Handles BF6 config file operations
class ConfigManager:
    def __init__(self, config_path: Path)
    def load_config(self) -> bool
    def save_config(self) -> bool
    def get_setting(self, key: str) -> Any
    def set_setting(self, key: str, value: Any) -> bool

# settings_manager.py - Manages game settings
class SettingsManager:
    def __init__(self, config_manager: ConfigManager)
    def apply_preset(self, preset_name: str) -> bool
    def validate_setting(self, key: str, value: Any) -> bool
    def get_available_settings(self) -> Dict[str, Any]

# backup_manager.py - Handles backup operations
class BackupManager:
    def __init__(self, config_manager: ConfigManager)
    def create_backup(self, name: str) -> Path
    def restore_backup(self, backup_path: Path) -> bool
    def list_backups(self) -> List[Path]
```

### UI Module (`src/ui/`)
```python
# main_window.py - Main application window
class MainWindow(QMainWindow):
    def __init__(self, settings_manager: SettingsManager)
    def setup_ui(self)
    def connect_signals(self)

# tabs/quick_settings_tab.py - Quick settings interface
class QuickSettingsTab(QWidget):
    def __init__(self, settings_manager: SettingsManager)
    def setup_ui(self)
    def apply_preset(self, preset_name: str)
```

### Data Module (`src/data/`)
```python
# models.py - Data models
@dataclass
class GameSetting:
    key: str
    name: str
    category: str
    value: Any
    default: Any
    range: Tuple[Any, Any]

# presets.py - Preset definitions
class PresetManager:
    def get_presets(self) -> Dict[str, Preset]
    def create_preset(self, name: str, settings: Dict) -> Preset
```

## 🔄 Migration Strategy

### Phase 1: Extract Core Logic
1. Create `src/core/` directory
2. Extract `ConfigManager` from main.py
3. Create `SettingsManager` and `BackupManager`
4. Update imports and dependencies

### Phase 2: Separate UI Components
1. Create `src/ui/` directory structure
2. Extract tab classes to separate files
3. Create reusable UI components
4. Implement proper signal/slot connections

### Phase 3: Data Layer Separation
1. Create `src/data/` directory
2. Move settings database to data layer
3. Create data models and validation
4. Implement proper data access patterns

### Phase 4: Utilities and Configuration
1. Create `src/utils/` and `src/config/` directories
2. Extract utility functions
3. Centralize configuration and constants
4. Implement proper error handling

## 🧪 Testing Strategy

### Unit Tests
- Test each module independently
- Mock dependencies for isolated testing
- Test business logic without UI

### Integration Tests
- Test module interactions
- Test complete workflows
- Test error handling and recovery

### UI Tests
- Test UI components in isolation
- Test user interactions
- Test responsive behavior

## 📊 Benefits of New Structure

### ✅ **Maintainability**
- Smaller, focused files
- Clear module boundaries
- Easy to locate and fix issues
- Reduced cognitive load

### ✅ **Testability**
- Unit tests for each module
- Mocked dependencies
- Isolated component testing
- Better test coverage

### ✅ **Scalability**
- Easy to add new features
- Modular architecture
- Reusable components
- Clear extension points

### ✅ **Team Development**
- Multiple developers can work on different modules
- Clear ownership and responsibilities
- Reduced merge conflicts
- Better code reviews

## 🚀 Implementation Plan

### Week 1: Core Refactoring
- [ ] Create new directory structure
- [ ] Extract ConfigManager to core module
- [ ] Create SettingsManager and BackupManager
- [ ] Update main.py to use new structure

### Week 2: UI Separation
- [ ] Extract UI components to separate files
- [ ] Create reusable UI components
- [ ] Implement proper signal/slot connections
- [ ] Update main window to use new UI structure

### Week 3: Data Layer
- [ ] Create data models
- [ ] Move settings database to data layer
- [ ] Implement proper data access patterns
- [ ] Add data validation

### Week 4: Testing & Documentation
- [ ] Add comprehensive unit tests
- [ ] Update documentation
- [ ] Performance testing
- [ ] Final integration testing

## 📈 Expected Outcomes

### Code Quality
- **Reduced complexity**: Smaller, focused files
- **Better maintainability**: Clear module boundaries
- **Improved testability**: Isolated components
- **Enhanced readability**: Well-organized structure

### Development Experience
- **Faster development**: Reusable components
- **Easier debugging**: Isolated modules
- **Better collaboration**: Clear ownership
- **Reduced bugs**: Better separation of concerns

### User Experience
- **Better performance**: Optimized architecture
- **More features**: Easier to extend
- **Improved stability**: Better error handling
- **Enhanced usability**: Cleaner code leads to better UI

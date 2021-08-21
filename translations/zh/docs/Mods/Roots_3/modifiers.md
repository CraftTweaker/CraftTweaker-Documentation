
### 类

```zenscript
import mods.roots.Modifiers;
```

#### 方法

```zenscript
void disableModifier(
  string modifierName // the modifier name to be disabled (if not provided in the format of roots:modifier, a resource location will be created from the string)
);
```

This is used to disable specific modifiers.

---


### 例子

```zenscript
import mods.roots.Modifiers;

Modifiers.disableModifier("roots:radius_boost"); // Disables the radius boost modifier from the Acid Cloud spell.
```

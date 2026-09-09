# JEI

There is already crafttweaker support for JEI, but it is lacking some features regarding the information pages.

**IMPORTANT: you should not use the native JEI support of crafttweaker to modify information pages if you're using this, or you might be in trouble.**

### MoreJei

```
import moretweaker.jei.MoreJei;

MoreJei.removeDescription(IIngredient input);

MoreJei.addDescription(IIngredient input, String[] description);
```
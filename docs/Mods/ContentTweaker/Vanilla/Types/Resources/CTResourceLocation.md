# CTResourceLocation

A resource location object is used for telling minecraft where to find something. It consists of a domain and a path.

## Calling/Importing the package
If you don't want to type out the package's whole name every time you use a static method or if you are encountering any issues with the class in general it might be required for you to [import](/AdvancedFunctions/Import/) the class:  
`import mods.contenttweaker.ResourceLocation`

## ZenMethods
### Static methods: Create
Static methods are those that are called on the package itself, not on any specific object of this instance.  
You can use this method to create a new CTResourceLocation instance:
```kotlin
var instance = mods.contenttweaker.ResourceLocation.create("contenttweaker:item/myItem");
```

### ZenGetters
ZenGetters are called on an object, not on the package itself

```
print(myLocation.domain);
```

| ZenGetter | Type   |
|-----------|--------|
| domain    | string |
| path      | string |
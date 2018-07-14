# Custom Types
Custom Types are a new powerful way for you to create your own _custom_ things to stage. Essentially what this allows you to do is. Say for example stage an Event from Minecraft or Stage a list of Blocks to prevent a player from interacting or breaking. Using the [Events](Vanilla/Events/IEventManager) CraftTweaker provides. This gives you the ability to lock more things down. Creating a complete custom experience in the game without the need for additional mods. As all you need is ZenStages and CraftTweaker sounds pretty cool, huh? 

This is a still a fairly new system and _may_ have some issues more missed things. So if you notice these please report them to [Our Repo](https://github.com/DarkPacks/ZenStages/issues) so we can look into it!

Note: This is a complete custom type nothing will check against this internally. You'll need to create and listen to the [Events](Vanilla/Events/IEventManager) to then call the provided methods in [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) to perform the checks. So the _slug/name_ name you use for the type you'll need to note down somewhere so you know what does what.

Note: It is also a recomended standard that you use unique names for **all** your Custom Types.

## Importing the package
`import mods.zenstages.type.CustomStageType;`

## How to create them
Custom Types are created via [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) using the following method.

```java
// initCustomType(string name, string value);
// initCustomType(string name, string[] values);
// initCustomType(string name, int value);
// initCustomType(string name, int[] values);
// initCustomType(string name, IIngredient value);
// initCustomType(string name, IIngredient[] values);
var MyCustomType as CustomStageType = ZenStager.initCustomType("blockBreak", [<minecraft:stone>]);
ZenStager.initCustomType("disallowedDimension", 14);
```

Once you have created the Custom Type you can now assign that Type to a [Stage](/Mods/GameStages/ZenStages/Stage/). By calling the following.
```java
// setStage(Stage stage);
MyCustomType.setStage(TestStage);
```

## How to perform a check to a Custom Type

This method requires that you have set a stage to a type. Using the above method. Otherwise it returns null.
```java
// getCustomStage(string name, string value);
// getCustomStage(string name, int value);
// getCustomStage(string name, IIngredient value);
ZenStager.getCustomStage("blockBreak", [<minecraft:stone>]);
```

This method does not require a Custom Type to be _Staged_ to a stage.
```java
// getCustomType(String name);
ZenStager.getCustomType("blockBreak");
```
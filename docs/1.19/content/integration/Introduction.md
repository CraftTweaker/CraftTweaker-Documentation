# CraftTweaker in a development environment

## About this category

This category is oriented to **Mod Developers** who seek to add explicit CraftTweaker support to their mods. This might include configuring a recipe, changing some values, or enabling and disabling things that could otherwise be done through the creation.

## Adding CraftTweaker to your environment:

You should be adding crafttweaker through a maven repository in your `repositories` block :

```groovy   
    maven {
        url "https://maven.blamejared.com"
    }
```
General maven rules apply. The format to add it to your `dependencies` is the same.
Use `maven:fileDescriptor`.

The naming of the file is `CraftTweaker-MC_VERSION-MAJOR_VERSION-MINOR_VERSION`, for versions lower than 1.17, and `CraftTweaker-LOADER-MC_VERSION-MAJOR_VERSION-MINOR_VERSION` for versions above 1.16
An example of this being applied is:

```groovy
dependencies {
    def minecraftVersion= 'net.minecraftforge:forge:1.19.2-43.1.34'
    minecraft minecraftVersion
    
    def ctDep = 'com.blamejared.crafttweaker:CraftTweaker-forge-1.19.2:10.0.1'
    compileOnly(ctDep)
    runtimeOnly(fg.deobf(ctDep))
    
    //AnnotationProcessor is here for generating docs. Check the "Generating Docs" page for more information
    annotationProcessor 'com.blamejared.crafttweaker:Crafttweaker_Annotation_Processors:3.0.0.10'
    annotationProcessor minecraftVersion
    annotationProcessor ctDep
}
```

That's it! Don't forget to refresh gradle to be able to use CraftTweaker in your development environment!

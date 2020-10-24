# Create Element
Custom Element Creation for Alchemistry

# Package
`mods.alchemistry.Util.createElement`
## Loader
This needs to be loaded with `#loader alchemistry`

## Methods
- **int atomicNumber** ID for new Element
- **String Name** New Elements Name
- **String Abbrebiation** New Elements Abbrebiation
- **int red** Element red shade, RGB
- **int green** Element green shade, RGB
- **int blue** Element blue shade, RGB

## Creation
```zenscript
mods.alchemistry.Util.createElement(int atomicNumber, String name, String abbreviation, int red, int green, int blue);

mods.alchemistry.Util.createElement(150,"vibranium","Vrb", 70, 90, 250);
mods.alchemistry.Util.createElement(151,"unobtanium","Uno",30,54,69);
```

## Notes

- Please use lowercase names
- Pre-existing atomic numbers cannot be overwritten
- The '#loader alchemistry' line is required at the top of the file. This file can only be used to create elements and compounds, other recipes must be put in other files.
- NOTE: As of v1.0.2, The mod Resource Loader must be used to include the image and model json for custom elements. If you would like to auto-generate these resources I have created a command-line JAR program [here](https://github.com/al132mc/alchemistry-resource-creator/releases) to do so.

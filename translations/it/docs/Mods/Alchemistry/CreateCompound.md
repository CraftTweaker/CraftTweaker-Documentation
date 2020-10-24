# Create Compound
Custom Alchemistry Compound Generation

# Package
```zenscript
mods.alchemistry.Util.createCompound
```

## Loader
This needs to be loaded with `#loader alchemistry`

## Methods
- **int meta** meta for new Compund
- **String Name** Name for New Compund
- **int red** compound red shade, RGB
- **int green** compound green shade, RGB
- **int blue** compound blue shade, RGB
- **Object[][]** Each Bracket holds a different element followed by a comma and the amount to use in your Compound

## Creation
```zenscript
mods.alchemistry.Util.createCompound(int meta, String name, int red, int green, int blue, Object[][] components);

mods.alchemistry.Util.createCompound(1000, "vibranium sufide", 20, 69, 185,
[["vibranium", 1],
 ["sulfur", 3]]);
```

## Notes
- Please use lowercase names
- The '#loader alchemistry' line is required at the top of the file. This file can only be used to create elements and compounds, other recipes must be put in other files.
- The components field requires each entry to be an array like so ["cellulose", 5], indicating the element/compound and it's quantity. String arguments are used here rather than itemstacks as a way to ensure that only elements/compounds are used.
- The meta field is required to ensure that your new compounds have an unchangeable identifier even when other compounds are created or removed. Each compound must have a unique meta value. At the time of this writing, the mod only uses the meta values from about 0 to 35, but I would start numbering your meta at 1000 (like seen above) or higher to ensure that your custom compounds never clash with Alchemistry's internal recipes

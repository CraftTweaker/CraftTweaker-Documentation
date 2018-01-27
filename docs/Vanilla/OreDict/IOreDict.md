# IOreDict

The Forge OreDictionary is like a huge Lexicon in the way that it features many different entries and each entry is described by fitting Items.  
When talking about ore Dictionarys, people mostly refer to [IOreDictEntries](IOreDictEntry) not the whole ore Dictionary.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.oredict.IOreDict;`

## How to retrieve the oreDictionary
You can retrieve the OreDictionary using the [`oreDict` global keyword](/Vanilla/Global_Functions).

## Methods
So what can be done with the oreDict?

### Getting an [IOreDictEntry](IOreDictEntry)
You can use either of the three ways below to refer to an OreDictEntry, no matter if it already exists or not.  
If the oreDictEntry does not yet exist, it will be created.

```java
oreDict.ingotIron;
oreDict.get("ingotIron");
oreDict["ingotIron"];
```


### Iterating through all registered [IOreDictEntries](IOreDictEntry)
```java
//the entries member is for retrieving all registered oreDictionary entries!
val allEntries = oreDict.entries;

for oreDictEntry in allEntries{
	print(oreDictEntry.name);
}

//Alternatively, you can just iterate through oreDict
for entry in oreDict {
	print(entry.name);
}

```

## How to check if an ore Dictionary entry exists

You can use the `in` or `has` operator to check if an [IOreDictEntry](IOreDictEntry) already exists:
```
if (oreDict in "ingotIron") {
	print("ingotIron exists!");
}

if (oreDict has "ingotIron") {
	print("ingotIron exists!");
}


//Alternatively use the contains function:
if(oreDict.contains "ingotIron") {
	print("ingotIron exists!");	
}
```
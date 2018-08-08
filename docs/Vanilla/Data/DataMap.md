# DataMap

A Map, sometimes also called an Associative Array is a data structure that allows you to store multiple items.  
Unlike an Array however, you can also give each of these item a key to call upon.  
The DataMap expands [IData](/Vanilla/data/IData/), so each DataMap is IData, you might need this info later.

## Creating a map:
A Map is a special kind of [IData](/Vanilla/data/IData/), so at the very last you'll need to import that interface:  
`import crafttweaker.data.IData;`

You may have noticed that no type can be converted into a map (nor can map be converted to any type besides Strings), so there has to be another way of creating them!  
There is:

```JAVA
import crafttweaker.data.IData;

val myFirstMap = {key1: "value1",
				  key2: "value2",
				  key3: 3} as IData;
```

The thing to remember is:  
Maps are handled as `Map<String,IData>`!  
That means your keys should not contain characters that normal CT strings can't handle.  
It also means that while the key is a string, the value is another [IData](/Vanilla/data/IData/) object.  
You can even nest maps inside maps (that's what a lot of NBT-Data do):  

```JAVA
val nestedMap = { key1: 
					{
						key1: "hello"
					}
				} as IData;
```


## Retrieving Members

Unfortunately, Maps created as above are immutable, so you cannot change their members.  
To retrieve a Map's member you need to know its key name. Then you can do this:

```JAVA
val mySecondMap = {key1: "value1",
				   key2: "value2",
				   key3: 3} as IData;

//Retrieves the member called "key1"
var k1 = mySecondMap.key1 as IData;
print(k1.asString());

//Retrieves the member called "key2"
var k2 = mySecondMap.memberGet("key2") as IData;
print(k2.asString());
```

## Modifying maps

You can add or substract maps from each other to get a new map with changed values.  
This even works for nested maps!

```
val map1 as IData = {
	key1 : "hello"
	key3 : "test"
};

val map2 as IData = {
	key2 : "bye"
	key3 : "override"
};

print((map1 + map2).asString()); //Prints {key1 : "hello", key2 : "bye", key3 : "override"}



val map3 as IData = {
	key1 : "two",
	key2 : "two",
	key3 : "three"
};

print((map3 - "key1").asString()); //Prints {key2 : "two", key3 : "three"}

val map4 as IData = {
	key3 : "anything"
};

print((map3 - map4).asString()); //Prints {key1 : "two", key2 : "two"}
```
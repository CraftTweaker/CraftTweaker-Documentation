# NameUtil

Set of utility methods related to names and naming in general.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.util.NameUtil;
```


## Static Methods

:::group{name=fixing}

Attempts to automatically fix the given `input` string, if possible, so that it can be used to build a <br />  well-formed [ResourceLocation](/vanilla/api/resource/ResourceLocation).

Returns: The fixed string.  
Return Type: string

```zenscript
NameUtil.fixing(input as string) as string
```

| Parameter |  Type  |                                                    Description                                                     |
|-----------|--------|--------------------------------------------------------------------------------------------------------------------|
| input     | string | The string that should be fixed to a [ResourceLocation](/vanilla/api/resource/ResourceLocation)-compatible format. |


:::

:::group{name=fixing}

Attempts to automatically fix the given `input` string, if possible, so that it can be used to build a <br />  well-formed [ResourceLocation](/vanilla/api/resource/ResourceLocation).

Returns: The fixed string.  
Return Type: string

```zenscript
NameUtil.fixing(input as string, mistakeHandler as BiConsumer<string,stdlib.List<string>>) as string
```

|   Parameter    |                        Type                        |                                                                                                                                    Description                                                                                                                                    |
|----------------|----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| input          | string                                             | The string that should be fixed to a [ResourceLocation](/vanilla/api/resource/ResourceLocation)-compatible format.                                                                                                                                                                |
| mistakeHandler | BiConsumer&lt;string,stdlib.List&lt;string&gt;&gt; | A bi-consumer that gets called if there were any mistakes in the original string. The first <br />                        element is the fixed string, and the second is a list of strings containing explanations <br />                        for all the identified mistakes. |


:::

:::group{name=fromFixedName}

Creates a [ResourceLocation](/vanilla/api/resource/ResourceLocation) from the given `input`, if possible, while fixing mistakes that <br />  may be present in the string.

Returns: A [ResourceLocation](/vanilla/api/resource/ResourceLocation) that represents the fixed input.  
Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
NameUtil.fromFixedName(input as string) as ResourceLocation
```

| Parameter |  Type  |                                                  Description                                                   |
|-----------|--------|----------------------------------------------------------------------------------------------------------------|
| input     | string | The string that should be fixed and converted to a [ResourceLocation](/vanilla/api/resource/ResourceLocation). |


:::

:::group{name=fromFixedName}

Creates a [ResourceLocation](/vanilla/api/resource/ResourceLocation) from the given `input`, if possible, while fixing mistakes that <br />  may be present in the string.

Returns: A [ResourceLocation](/vanilla/api/resource/ResourceLocation) that represents the fixed input.  
Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
NameUtil.fromFixedName(input as string, mistakeHandler as BiConsumer<string,stdlib.List<string>>) as ResourceLocation
```

|   Parameter    |                        Type                        |                                                                                                                                    Description                                                                                                                                    |
|----------------|----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| input          | string                                             | The string that should be fixed and converted to a [ResourceLocation](/vanilla/api/resource/ResourceLocation).                                                                                                                                                                    |
| mistakeHandler | BiConsumer&lt;string,stdlib.List&lt;string&gt;&gt; | A bi-consumer that gets called if there were any mistakes in the original string. The first <br />                        element is the fixed string, and the second is a list of strings containing explanations <br />                        for all the identified mistakes. |


:::

:::group{name=isAutogeneratedName}

Verifies whether the given name has been autogenerated by CraftTweaker.

Returns: Whether the name has been autogenerated by CraftTweaker.  
Return Type: boolean

```zenscript
NameUtil.isAutogeneratedName(name as ResourceLocation) as boolean
```

| Parameter |                            Type                            |     Description     |
|-----------|------------------------------------------------------------|---------------------|
| name      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The name to verify. |


:::


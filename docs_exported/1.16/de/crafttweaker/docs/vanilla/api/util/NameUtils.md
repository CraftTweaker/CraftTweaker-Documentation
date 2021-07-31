# NameUtils

Set of utility methods related to names and naming in general.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.util.NameUtils;
```


## Methoden

:::group{name=fixing}

Attempts to automatically fix the given <code>input</code> string, if possible, so that it can be used to build a well-formed [MCResourceLocation](/vanilla/api/util/MCResourceLocation).

Returns: The fixed string. Return Type: string

```zenscript
NameUtils.fixing(input as string) as string
```

| Parameter | Type   | Beschreibung                                                                                                       |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------ |
| input     | string | The string that should be fixed to a [MCResourceLocation](/vanilla/api/util/MCResourceLocation)-compatible format. |


:::

:::group{name=fixing}

Attempts to automatically fix the given <code>input</code> string, if possible, so that it can be used to build a well-formed [MCResourceLocation](/vanilla/api/util/MCResourceLocation).

Returns: The fixed string. Return Type: string

```zenscript
NameUtils.fixing(input as string, mistakeHandler as BiConsumer<string,stdlib.List<string>>) as string
```

| Parameter      | Type                                                                       | Beschreibung                                                                                                       |
| -------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| input          | string                                                                     | The string that should be fixed to a [MCResourceLocation](/vanilla/api/util/MCResourceLocation)-compatible format. |
| mistakeHandler | BiConsumer&lt;string,stdlib.List&lt;string&gt;&gt; | A bi-consumer that gets called if there were any mistakes in the original string. The first                        |
 element is the fixed string, and the second is a list of strings containing explanations for all the identified mistakes. |


:::

:::group{name=fromFixedName}

Creates a [MCResourceLocation](/vanilla/api/util/MCResourceLocation) from the given <code>input</code>, if possible, while fixing mistakes that may be present in the string.

Returns: A [MCResourceLocation](/vanilla/api/util/MCResourceLocation) that represents the fixed input. Return Type: [MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
NameUtils.fromFixedName(input as string) as MCResourceLocation
```

| Parameter | Type   | Beschreibung                                                                                                   |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| input     | string | The string that should be fixed and converted to a [MCResourceLocation](/vanilla/api/util/MCResourceLocation). |


:::

:::group{name=fromFixedName}

Creates a [MCResourceLocation](/vanilla/api/util/MCResourceLocation) from the given <code>input</code>, if possible, while fixing mistakes that may be present in the string.

Returns: A [MCResourceLocation](/vanilla/api/util/MCResourceLocation) that represents the fixed input. Return Type: [MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
NameUtils.fromFixedName(input as string, mistakeHandler as BiConsumer<string,stdlib.List<string>>) as MCResourceLocation
```

| Parameter      | Type                                                                       | Beschreibung                                                                                                   |
| -------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| input          | string                                                                     | The string that should be fixed and converted to a [MCResourceLocation](/vanilla/api/util/MCResourceLocation). |
| mistakeHandler | BiConsumer&lt;string,stdlib.List&lt;string&gt;&gt; | A bi-consumer that gets called if there were any mistakes in the original string. The first                    |
 element is the fixed string, and the second is a list of strings containing explanations for all the identified mistakes. |


:::


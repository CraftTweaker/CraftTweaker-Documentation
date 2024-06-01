# InteractionResultHolder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.InteractionResultHolder;
```


## Static Methods

:::group{name=consume}

Return Type: [InteractionResultHolder](/vanilla/api/world/InteractionResultHolder)&lt;T&gt;

```zenscript
InteractionResultHolder.consume<T : Object>(object as T) as InteractionResultHolder<T>
```

| Parameter |  Type  |
|-----------|--------|
| object    | T      |
| T         | Object |


:::

:::group{name=fail}

Return Type: [InteractionResultHolder](/vanilla/api/world/InteractionResultHolder)&lt;T&gt;

```zenscript
InteractionResultHolder.fail<T : Object>(object as T) as InteractionResultHolder<T>
```

| Parameter |  Type  |
|-----------|--------|
| object    | T      |
| T         | Object |


:::

:::group{name=pass}

Return Type: [InteractionResultHolder](/vanilla/api/world/InteractionResultHolder)&lt;T&gt;

```zenscript
InteractionResultHolder.pass<T : Object>(object as T) as InteractionResultHolder<T>
```

| Parameter |  Type  |
|-----------|--------|
| object    | T      |
| T         | Object |


:::

:::group{name=sidedSuccess}

Return Type: [InteractionResultHolder](/vanilla/api/world/InteractionResultHolder)&lt;T&gt;

```zenscript
InteractionResultHolder.sidedSuccess<T : Object>(object as T, success as boolean) as InteractionResultHolder<T>
```

| Parameter |  Type   |
|-----------|---------|
| object    | T       |
| success   | boolean |
| T         | Object  |


:::

:::group{name=success}

Return Type: [InteractionResultHolder](/vanilla/api/world/InteractionResultHolder)&lt;T&gt;

```zenscript
InteractionResultHolder.success<T : Object>(object as T) as InteractionResultHolder<T>
```

| Parameter |  Type  |
|-----------|--------|
| object    | T      |
| T         | Object |


:::

## Methods

:::group{name=getObject}

Return Type: T

```zenscript
InteractionResultHolder.getObject<T : Object>() as T
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::


## Properties

|  Name  |                           Type                            | Has Getter | Has Setter |
|--------|-----------------------------------------------------------|------------|------------|
| result | [InteractionResult](/vanilla/api/world/InteractionResult) | true       | false      |


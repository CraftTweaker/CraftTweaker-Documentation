# MCTickEvent

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.tick.MCTickEvent;
```


## Extending MCEvent

MCTickEvent extends [MCEvent](/vanilla/api/event/MCEvent). That means all methods available in [MCEvent](/vanilla/api/event/MCEvent) are also available in MCTickEvent

## Methods

### getPhase

Return Type: string

```zenscript
MCTickEvent.getPhase() as string
myMCTickEvent.getPhase();
```

### getSide

Return Type: string

```zenscript
MCTickEvent.getSide() as string
myMCTickEvent.getSide();
```

### getType

Return Type: string

```zenscript
MCTickEvent.getType() as string
myMCTickEvent.getType();
```

### isClient

Return Type: boolean

```zenscript
MCTickEvent.isClient() as boolean
myMCTickEvent.isClient();
```

### isEnd

Return Type: boolean

```zenscript
MCTickEvent.isEnd() as boolean
myMCTickEvent.isEnd();
```

### isServer

Return Type: boolean

```zenscript
MCTickEvent.isServer() as boolean
myMCTickEvent.isServer();
```

### isStart

Return Type: boolean

```zenscript
MCTickEvent.isStart() as boolean
myMCTickEvent.isStart();
```


## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| client | boolean | true | false |
| end | boolean | true | false |
| phase | string | true | false |
| server | boolean | true | false |
| side | string | true | false |
| start | boolean | true | false |
| type | string | true | false |


# Timer

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.utils.functions.timer.Timer;
```


## Constructors


```zenscript
new Timer(id as int, time as long) as Timer
```
| Parameter | Type |
|-----------|------|
| id        | int  |
| time      | long |



## Methods

:::group{name=addTime}

```zenscript
// Timer.addTime()

myTimer.addTime();
```

:::

:::group{name=getCurrentTime}

Return Type: long

```zenscript
// Timer.getCurrentTime() as long

myTimer.getCurrentTime();
```

:::

:::group{name=getEndTime}

Return Type: long

```zenscript
// Timer.getEndTime() as long

myTimer.getEndTime();
```

:::

:::group{name=getId}

Return Type: long

```zenscript
// Timer.getId() as long

myTimer.getId();
```

:::

:::group{name=isEnd}

Return Type: boolean

```zenscript
// Timer.isEnd() as boolean

myTimer.isEnd();
```

:::

:::group{name=isStart}

Return Type: boolean

```zenscript
// Timer.isStart() as boolean

myTimer.isStart();
```

:::

:::group{name=setCurrentTime}

```zenscript
Timer.setCurrentTime(currentTime as long)
```

|  Parameter  | Type |
|-------------|------|
| currentTime | long |


:::

:::group{name=setEnd}

```zenscript
Timer.setEnd(end as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| end       | boolean |


:::

:::group{name=setEndTime}

```zenscript
Timer.setEndTime(endTime as long)
```

| Parameter | Type |
|-----------|------|
| endTime   | long |


:::

:::group{name=setId}

```zenscript
Timer.setId(id as long)
```

| Parameter | Type |
|-----------|------|
| id        | long |


:::

:::group{name=setStart}

```zenscript
Timer.setStart(start as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| start     | boolean |


:::



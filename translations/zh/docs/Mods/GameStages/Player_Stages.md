# 播放器阶段

GameStages API 扩展了制图师的 [IPlayer](/Vanilla/Players/IPlayer/) 功能，使您能够检查和修改玩家的阶段。

## 调用方法

由于这是一个 [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/), 你可以简单地调用任何 [IPlayer](/Vanilla/Players/IPlayer/) 对象的方法或其中任何子类型。

## 方法

### 检查游戏戳

方法返回了布尔值。

```zenscript
// 检查玩家是否已通过阶段。
//player.hasGameStage(String stage);
player.hasGameStage("one");



// 检查玩家是否有任何经过的阶段。 他们只需要一个。
//player.hasAnyGameStages(String... 玩家。
player.hasAnyGameStages("one", "2");



// 检查玩家是否拥有所有通过的阶段。
//player.hasAllGameStages (String... (ii)
player.hasAllGameStages ("one", "2");
```

### 添加或删除游戏

方法返回无效（无）。

```zenscript
// 为玩家解锁舞台。
//addGameStage(阶段)；
addGameStage(阶段)；


// 为玩家锁定舞台。
//removeGameStage(阶段)；
removeGameStage(阶段)；
```
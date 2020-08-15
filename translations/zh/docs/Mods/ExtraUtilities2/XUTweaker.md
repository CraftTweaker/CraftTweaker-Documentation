# XUTweaker

XUT弱化包增加了几种静态实用方法。

## 导入相关包

如果您想要缩短方法调用或遇到您可能需要导入软件包的任何问题。  
您可以这样做。

```zenscript
导入exautilities2.调节器.XUTinstrer;
```

## 方法

### 允许生存的飞行方式

允许所有玩家永久飞行.

```zenscript
extrautilities2.Tweeper.XUTweeper.allowSurvivalFlight();
```

### 禁用地狱门户网站

永久防止地狱下界门户(以及使用PortalSpawnEvent的所有门户)生成产卵。

```zenscript
extrautilities2.调整.XUTweeper.disableNetherlandPortals();
```

### 检查玩家是否是一个假玩家

返回一个布尔值，表示玩家是否是一个假玩家。

需要 [IPlayer](/Vanilla/Players/IPlayer) 参数。

```zenscript
extrautilities2.调整.XUTweeper.isPlayerFake(玩家)；
```

### 为玩家打开书籍屏幕

尝试向给定的玩家打开书签屏幕。

返回一个布尔值，说明命令是否正确执行。  
需要一个 [IPlayer](/Vanilla/Players/IPlayer) 参数。  
还需要一个字符串的 []参数作为页面。

```zenscript
extrautilities2.调整。XUTweeper.openBookScreen(播放器，页面)；
extrautilities2.调整。XUTweeper.openBookScreen(播放器，["Page 1", "Page 2"])；
```
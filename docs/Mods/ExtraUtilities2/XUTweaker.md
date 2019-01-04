# XUTweaker

The XUTweaker package adds several static utility methods.  

## Importing the package
If you want to shorten method calls or encounter any issues you might need to import the package.  
You can do so using  
```
import extrautilities2.Tweaker.XUTweaker;
```

## Methods

### Allow survival flight
Allows Flight for all players, permanently.
```
extrautilities2.Tweaker.XUTweaker.allowSurvivalFlight();
```


### Disable Nether Portals
Prevents Nether portals (and all portals that use the PortalSpawnEvent) from spawning, permanently.
```
extrautilities2.Tweaker.XUTweaker.disableNetherPortals();
```

### Check if a player is a fake Player
Returns a boolean stating if the player is a fake Player.  

Requires an [IPlayer](/Vanilla/Players/IPlayer) argument.
```
extrautilities2.Tweaker.XUTweaker.isPlayerFake(player);
```


### Open a books screen for the player
Tries to open the written book screen to the given player.  

Returns a boolean stating if the command was executed correctly.  
Requires an [IPlayer](/Vanilla/Players/IPlayer) argument.  
Also requires a string[] argument that will be the pages.
```
extrautilities2.Tweaker.XUTweaker.openBookScreen(player, pages);
extrautilities2.Tweaker.XUTweaker.openBookScreen(player, ["Page 1", "Page 2"]);
```
# Events
## Pre 1.12
Before 1.12, a lot of code was different, so was the way of implementing some Events
In before 1.12 there were essentially two events you could subscribe to and that was when players logged in and out.

```
server.onPlayerLoggedIn(function(player){
	doSomething();
})


server.onPlayerLoggedOut(function(player){
	doSomething();
})
```
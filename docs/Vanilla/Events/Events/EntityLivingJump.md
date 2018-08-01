# EntityLivingJump

The EntityLivingJump Event is fired whenver an entity jumps.  

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingJumpEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerDeathDrops Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
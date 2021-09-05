# RenderNameplateEvent

RenderNameplateEvent is fired whenever the entity renderer attempts to render a name plate/tag of an entity.

 This event has a result. ALLOW will force-render name plate/tag. DEFAULT will ignore the hook and continue using the vanilla check. DENY will prevent name plate/tag from rendering.

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.client.RenderNameplateEvent;
```


## Extending MCEntityEvent

RenderNameplateEvent extends [MCEntityEvent](/vanilla/api/event/entity/MCEntityEvent). That means all methods available in [MCEntityEvent](/vanilla/api/event/entity/MCEntityEvent) are also available in RenderNameplateEvent

## Methods

:::group{name=getContent}

Gets the current content of the nameplate. This can be changed by mods.

Returns: The current nameplate content.  
Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
// RenderNameplateEvent.getContent() as MCTextComponent

myRenderNameplateEvent.getContent();
```

:::

:::group{name=getOriginalContent}

Gets the original content of the nameplate. This can not be changed by mods.

Returns: The original nameplate content.  
Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
// RenderNameplateEvent.getOriginalContent() as MCTextComponent

myRenderNameplateEvent.getOriginalContent();
```

:::

:::group{name=setContent}

Sets the new content of the nameplate.

Return Type: void

```zenscript
// RenderNameplateEvent.setContent(contents as MCTextComponent) as void

myRenderNameplateEvent.setContent("Creator");
```

| Parameter | Type                                                      | Description                 |
| --------- | --------------------------------------------------------- | --------------------------- |
| contents  | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | The new nameplate contents. |


:::


## Properties

| Name            | Type                                                                   | Has Getter | Has Setter | Description                                                                                |
| --------------- | ---------------------------------------------------------------------- | ---------- | ---------- | ------------------------------------------------------------------------------------------ |
| contenu         | [RenderNameplateEvent](/vanilla/api/event/client/RenderNameplateEvent) | true       | true       | Sets the new content of the nameplate.                                                     |
| originalContent | [MCTextComponent](/vanilla/api/util/text/MCTextComponent)              | true       | false      | Gets the original content of the nameplate. <br />  This can not be changed by mods. |


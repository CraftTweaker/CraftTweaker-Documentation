# Expansion for IItemStack

## Methods

:::group{name=canPerformAction}

Checks if this item can perform the given [ItemAbility](/neoforge/api/item/ItemAbility).

Returns: True if it can perform the action, false otherwise.  
Return Type: boolean

```zenscript
IItemStack.canPerformAction(action as ItemAbility) as boolean
```

| Parameter |                     Type                      |      Description       |
|-----------|-----------------------------------------------|------------------------|
| action    | [ItemAbility](/neoforge/api/item/ItemAbility) | The action to perform. |


:::

:::group{name=getCapability}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
IItemStack.getCapability<T : Object>(cap as ItemCapability<T,Void>) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| Parameter |                                  Type                                   |
|-----------|-------------------------------------------------------------------------|
| cap       | [ItemCapability](/neoforge/api/capability/ItemCapability)&lt;T,Void&gt; |
| T         | Object                                                                  |


:::

:::group{name=getCapabilityWithContext}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
IItemStack.getCapabilityWithContext<T : Object, C : Object>(cap as ItemCapability<T,C>, context as @org.openzen.zencode.java.ZenCodeType.Nullable C) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| Parameter |                                 Type                                 |
|-----------|----------------------------------------------------------------------|
| cap       | [ItemCapability](/neoforge/api/capability/ItemCapability)&lt;T,C&gt; |
| context   | @org.openzen.zencode.java.ZenCodeType.Nullable C                     |
| T         | Object                                                               |
| C         | Object                                                               |


:::



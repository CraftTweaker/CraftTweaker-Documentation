# IAttachmentHolder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.neoforge.api.attachment.IAttachmentHolder;
```


## Methods

:::group{name=getAttachmentData}

Return Type: T

```zenscript
IAttachmentHolder.getAttachmentData<T : Object>(type as AttachmentType<T>) as T
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| type      | [AttachmentType](/neoforge/api/attachment/AttachmentType)&lt;T&gt; |
| T         | Object                                                             |


:::

:::group{name=getAttachmentData}

Return Type: T

```zenscript
IAttachmentHolder.getAttachmentData<T : Object>(type as Supplier<AttachmentType<T>>) as T
```

| Parameter |                                        Type                                        |
|-----------|------------------------------------------------------------------------------------|
| type      | Supplier&lt;[AttachmentType](/neoforge/api/attachment/AttachmentType)&lt;T&gt;&gt; |
| T         | Object                                                                             |


:::

:::group{name=hasAttachmentData}

Return Type: boolean

```zenscript
IAttachmentHolder.hasAttachmentData<T : Object>(type as AttachmentType<T>) as boolean
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| type      | [AttachmentType](/neoforge/api/attachment/AttachmentType)&lt;T&gt; |
| T         | Object                                                             |


:::

:::group{name=hasAttachmentData}

Return Type: boolean

```zenscript
IAttachmentHolder.hasAttachmentData<T : Object>(type as Supplier<AttachmentType<T>>) as boolean
```

| Parameter |                                        Type                                        |
|-----------|------------------------------------------------------------------------------------|
| type      | Supplier&lt;[AttachmentType](/neoforge/api/attachment/AttachmentType)&lt;T&gt;&gt; |
| T         | Object                                                                             |


:::

:::group{name=setAttachmentData}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
IAttachmentHolder.setAttachmentData<T : Object>(type as AttachmentType<T>, data as T) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| type      | [AttachmentType](/neoforge/api/attachment/AttachmentType)&lt;T&gt; |
| data      | T                                                                  |
| T         | Object                                                             |


:::

:::group{name=setAttachmentData}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
IAttachmentHolder.setAttachmentData<T : Object>(type as Supplier<AttachmentType<T>>, data as T) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| Parameter |                                        Type                                        |
|-----------|------------------------------------------------------------------------------------|
| type      | Supplier&lt;[AttachmentType](/neoforge/api/attachment/AttachmentType)&lt;T&gt;&gt; |
| data      | T                                                                                  |
| T         | Object                                                                             |


:::



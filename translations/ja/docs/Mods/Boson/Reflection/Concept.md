# The Concept

Reflection is an English word that has many meanings, but one in particular is "the production of an image by or as if by a mirror" ([Source: Merriam-Webster Dictionary](https://www.merriam-webster.com/dictionary/reflection)). The same concept applies to programming.

Reflection is, in fact, a tool that allows a program to see itself in the mirror and perform some introspection, like analyzing what type an object is, which methods the program exposes, invoking private variables etc. This is obviously a very powerful tool, but at the same time it is also extremely dangerous since reflection provides access to almost anything that is currently running inside a program.

The ZenScriptX project aims to bring a small subset of the possibilities of Reflection to ZenScript, without allowing script users to circumvent the ZenScript sandbox. In particular, the ZenScriptX toned-down implementation of reflection allows the user to do the following:

- inspect the type of any object, be it a variable or a bracket handler;
- obtain the simple and fully qualified name of a class in the ZenScript sandbox;
- obtain the simple and fully qualified name of a class outside the ZenScript sandbox;
- convert between a ZenScript class and its native counterpart (i.e. `crafttweaker.item.IItemStack` becomes `crafttweaker.api.item.IItemStack`).

And this is it: there is no way for a script user to list all the methods provided by a class or circumvent the restricitions imposed by ZenScript with this reflection. It is, in fact, more a useful developer tool to ensure that types exposed by a CraftTweaker integration get converted correctly between the script and the actual backend.

To get started, please look at the documentation for either [`NativeClass`](/Mods/Boson/Reflection/NativeClass/) or [`Class`](/Mods/Boson/Reflection/Class/).

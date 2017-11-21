# Global Functions

Global functions are functions that can be called without being [imported](/AdvancedFunctions/Import).  
Here's the list:

## print

Prints the string to the crafttweaker log as information.

```java
//print(String message);
print("Hello World!");
```
Returns nothing

## totalActions

```java
//totalActions();
totalActions();
```
Returns an int that shows how many global functions are registered.

## enableDebug

Enables Debug mode.  
Use of the [Debug Preprocessor](/AdvancedFunctions/Preprocessors/DebugPreprocessor) is preferred though.

```java
//enableDebug();
enableDebug();
```
Returns nothing

## isNull

Checks if a given object is null.  
Doesn't work on primitives!

```java
//isNull(Object o);
isNull(<minecraft:dirt>);
```
Returns a boolean

## max

```java
//max(int number1, int number2);
max(10, 11);
```
Returns an int

## min

```java
//min(int number1, int number2);
min(10, 11);
```
Returns an int

## pow

```java
//pow(double number1, double number2);
pow(2.0, 4.0);
```
Returns a double

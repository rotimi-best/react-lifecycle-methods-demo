# react-lifecycle-methods-demo

## Practice Task

### Task 1

Create 2 components, one of them should receive a prop called name and then display this

```javascript
Welcome {props.name} to Ossystem
```

Then the second component should be a clock that displays the current time in the browser. In such a way that every second, the time should be updated in the browser too. It should return this

```javascript
The time now is {state.time}
```

### Demo 1

![Task One Demo](https://github.com/rotimi-best/react-lifecycle-methods-demo/blob/master/src/assets/task_1.gif)

### Hints

1. Store the time in state and update it every second

2. To get the time in string use `const time = new Date().toLocaleTimeString();`

### Task 2

Before the time is updated in the browser you should check it, if the amound of seconds is less than or equal to 5 then update, if not then don't update it. For example:

```javascript
...
4:20:47 => dont update
4:20:48 => dont update
4:20:49 => dont update
4:20:50 => update
4:20:51 => update
4:20:52 => update
4:20:53 => update
4:20:54 => update
4:20:55 => update
4:20:56 => dont update
4:20:57 => dont update
4:20:58 => dont update
4:20:59 => dont update
4:20:60 => update
4:20:61 => dont update
...
```

### Demo 2

![Task Two Demo](https://github.com/rotimi-best/react-lifecycle-methods-demo/blob/master/src/assets/task_2.gif)

### NOTE

> You must use component lifecycles to implement this task

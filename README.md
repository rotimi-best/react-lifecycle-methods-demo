# react-lifecycle-methods-demo

## Practice Task

---

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

## Практическое задание

---

### Задача 1

Создайте 2 компонента, один из которых должен получить prop с именем name, а затем отобразить это

```javascript
Welcome {props.name} to Ossystem
```

Тогда вторым компонентом должны быть часы, которые отображают текущее время в браузере. Таким образом, что каждую секунду время должно обновляться и в браузере. Должно вернуть это

```javascript
The time now is {state.time}
```

### Демо 1

![Task One Demo](https://github.com/rotimi-best/react-lifecycle-methods-demo/blob/master/src/assets/task_1.gif)

### Советы

1. Храните время в состоянии и обновляйте его каждую секунду

2. Чтобы получить время в строке, используйте `const time = new Date().toLocaleTimeString();`

### Задача 2

Перед обновлением времени в браузере вы должны проверить его, если сумма секунд меньше или равна 5, затем обновить, если нет, не обновлять его. Например:

```javascript
...
4:20:47 => не обновлять
4:20:48 => не обновлять
4:20:49 => не обновлять
4:20:50 => обновлять
4:20:51 => обновлять
4:20:52 => обновлять
4:20:53 => обновлять
4:20:54 => обновлять
4:20:55 => обновлять
4:20:56 => не обновлять
4:20:57 => не обновлять
4:20:58 => не обновлять
4:20:59 => не обновлять
4:20:60 => обновлять
4:20:61 => не обновлять
...
```

### Демо 2

![Task Two Demo](https://github.com/rotimi-best/react-lifecycle-methods-demo/blob/master/src/assets/task_2.gif)

### Внимание

> Для реализации этой задачи необходимо использовать жизненные циклы компонентов

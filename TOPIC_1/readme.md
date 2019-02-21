# Lesson 1

Thinking in Components

## Basic HTML Form

```html
<form action='/submit'>
    <label>
        Name
        <input name='name' />
    </label>
    <label>
        Grade
        <select name='grade'>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
        </select>
    </label>
    <label>
        Subject
        <select name='subject'>
            <option value='s'>Science</option>
            <option value='t'>Technology</option>
            <option value='e'>Engineering</option>
            <option value='m'>Math</option>
        </select>
    </label>
    <button type='submit'>Create Account</button>
</form>
```

The top-level header of each element above is called the tag. For example, `form` is a tag, and `label` is a tag.

The elements next to the tag are called attributes. For example, `name` and `value` are attributes. In React component-based development, we call this a `prop`.

Elements embedded inside a tag are called child tags. For example, the `label` tag is a child of the `form` element.

### Thinking in Components

Taking the above basic HTML form, and given that we could somehow create our own HTML tags, how could we possibly simplify the above code? Is there a way we can reduce the amount of tags we have to write or condense the child elements into attributes/props? 

What about:

- Can we simplify the labels so that we don't have to include it for every form entry? Maybe we could embed the label as a prop for the `input` tags or `option` tags?
- Can we simplify the `option` tags under the `select` elements, maybe passing it as a prop?

The answer to all the above is yes! But how? Let's just write down some theoretical code that might help us simplify the labels.

```jsx
<form action='/submit'>
    <Input name='name' label='Name' />
    <Select name='grade' label='Grade'>
        <option value='9'>9</option>
        <option value='10'>10</option>
        <option value='11'>11</option>
        <option value='12'>12</option>
    </Select>
    <Select name='subject' label='Subject'>
        <option value='s'>Science</option>
        <option value='t'>Technology</option>
        <option value='e'>Engineering</option>
        <option value='m'>Math</option>
    </Select>
    <button type='submit'>Create Account</button>
</form>
```

So as you can see, we've added the `label` tag as a prop for each of our "custom" `Input` and `Select` tags. This already has reduced six lines of code. Let's keep going:

```jsx
<form action='/submit'>
    <Input name='name' label='Name' />
    <Select name='grade' label='Grade' choices={gradeOptions} />
    <Select name='subject' label='Subject' choices={subjectOptions} />
    <button type='submit'>Create Account</button>
</form>
```

And just like that, we've already gotten rid of eight lines of code. We've simply replaced the individual `option` elements as a single prop, `choices`, which we pass a JavaScript OBJECT.

### JavaScript Objects

In JavaScript, objects are very simple. They contain unlimited sets of keys and values, like such:

```javascript
const gradeOptions = {
    grade9: 9,
    grade10: 10,
    grade11: 11,
    grade12: 12
};
const subjectOptions = {
    s: 'Science',
    t: 'Technology',
    e: 'Engineering',
    m: 'Mathematics'
};
```

**The idea we want to take from this is:**
> Components can abstract away as little or as much as you like.

> Where you draw the line is very much up to you and where you drawn the line of abstraction & maintainability.


## Template Strings

Template strings allow us to integrate placeholders (or variables) in strings with ease.

Conventionally, if we wanted to output some variables into a string, we might write:

```javascript
let name = 'Bob';
console.log('Welcome, ' + name);
```

Which would output:
`'Welcome, Bob'`

However, once we start including multiple variables in a string, things could get complicated

```javascript
let name = 'Bob';
let age = 16;
let city = 'Los Angeles';
console.log(name + ' is a ' + age + ' year old who lives in ' + city + '.');
```

With template strings, we can simplify this:

```javascript
console.log(`${name} is a ${age} year old who lives in ${city}.`);
```

As you can see, we use the backtick (` `` `) to denote a **template literal**, which returns a string. We can also store this in a variable:

```javascript
const message = `${name} is a ${age} year old who lives in ${city}.`
```

## Converting our Form Widget to Pure JavaScript

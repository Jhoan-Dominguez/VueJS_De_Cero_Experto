# Introducción VueJS

The Progressive JavaScript Framework -> VUE nos permite ir progresivamente migrando nuestra aplicación de un determinado framework a VUE   , es decir, podemos crear un componente en donde solamente ahi existirá VUE.

**Hola Mundo**

En este ejemplo VUE existe unicamente en el DIV -> myApp

**HTML**
~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introducción a Vue</title>
</head>
<body>
    <!-- Vue tiene control absoluto de este DIV -->
    <div id="myApp"></div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="./app.js"></script>
</body>
</html>
~~~
**JS**
~~~
const app = Vue.createApp({
    template: `
    <h1> Hola Mundo </h1>
    <p> Desde App.js</p>  
    `
})

app.mount("#myApp")
~~~

También podemos realizar insertar lógica de JS (resultado de funciones, operaciones, uso del operador ternario, etc.) en el componente.
~~~
const app = Vue.createApp({
    template: `
    <h1> Hola Mundo </h1>
    <p> {{ true ? 'activo' : 'inactivo' }} </p>
    `
})

app.mount("#myApp")
~~~

Tenemos dos formas de utilizar VUE: el composition API, options API.

# Directivas

## [v-on](https://vuejs.org/api/built-in-directives.html#v-on)

Se utiliza para escuchar los eventos y llamar un método. Existen algunos [modificadores de eventos](https://vuejs.org/guide/essentials/event-handling.html#key-modifiers) para poder identificar los eventos de forma mas fácil

**HTML**
~~~
<button v-on:click="capitalize">
    capitalize
</button>
~~~
**JS**
~~~
const app = Vue.createApp({
    methods: {
        changeQuote() {
            console.log("Hola Mundo");
        },
    },
})
~~~

## [v-for](https://vuejs.org/api/built-in-directives.html#v-for)

Me permite iterar los elementos y crear de forma dinámica elementos html según la data existente.

**Data**
~~~
const quotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]
~~~

**HTML**
~~~
<ul>
    <!-- <li v-for="{quote, author} in quotes">  -->
    <li v-for="({quote, author}, index) in quotes"> 
        <span>{{ index }} {{ quote }} </span>
        <blockquote> -{{ author }}</blockquote>
    </li>
</ul>
~~~
**JS**
~~~
const app = Vue.createApp({
    data() {
        return {
            // quotes: quotes
            quotes
        }
    },

})

app.mount("#myApp")
~~~

## [v-model](https://vuejs.org/api/built-in-directives.html#v-model)

Permite sincronizar el valor de mis propiedades reactivas con mis componentes **HTML**, de esta forma el valor que tome la variable se actualizara y mostrara de forma automática en el componente.

**HTML**
~~~
<input
    type="text"
    v-model="newQuote"
    v-on:keypress.enter="addQuote" 
    >
<hr>
~~~

**JS**
~~~
methods: {
    addQuote() {

        this.quotes.unshift({
            quote: this.newQuote
        })
    },
}
~~~

## [v-if](https://vuejs.org/guide/essentials/conditional.html#v-if)
Permite mostrar o no un componente, según la condición entregada.
Si la condición no se cumple el componente no es creado

**HTML**
~~~
<ul>
    <!-- <li v-for="{quote, author} in quotes">  -->
    <li v-for="({quote, author}, index) in quotes"> 
        <span>{{ index }} {{ quote }} </span>
        <blockquote v-if="author" > -{{ author }}</blockquote>
    </li>
</ul>
~~~

## [v-show](https://vuejs.org/guide/essentials/conditional.html#v-show)
Permite mostrar o no un componente, según la condición entregada.
Si la condición no se cumple el componente es creado, pero se oculta a la vista del usuario.

**HTML**
~~~
<ul>
    <!-- <li v-for="{quote, author} in quotes">  -->
    <li v-for="({quote, author}, index) in quotes"> 
        <span>{{ index }} {{ quote }} </span>
        <blockquote v-show="author" > -{{ author }}</blockquote>
    </li>
</ul>
~~~

<!-- ## v

**HTML**
~~~
~~~

**JS**
~~~
~~~ -->
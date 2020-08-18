# Petbook

## Lenguajes y herramientas:

[<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />][html5]
[<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />][css3]
[<img align="left" alt="Sass" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" />][sass]
[<img align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />][react]
[<img align="left" alt="Mui" width="26px" src="https://redux.js.org/img/redux.svg" />][redux]
[<img align="left" alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />][nodejs]
[<img align="left" alt="Firebase" width="26px" src="https://miro.medium.com/max/300/1*R4c8lHBHuH5qyqOtZb3h-w.png" />][firebase]
[<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />][git]
[<img align="left" alt="Mui" width="26px" src="https://material-ui.com/static/logo_raw.svg" />][mui]
<br />
<br />

## Próposito del proyecto

## Funcionalidades

## Práctica de código legible aplicadas

## Estilos de programacion aplicados
### Codegolf
```javascript
console.table(undefined)
```
### Bulletin Board
```javascript
console.table(undefined)
```
### Comentarios
```javascript
console.table(undefined)
```

## Principios S.O.L.I.D aplicados
### S — Single Responsibility
Cada componente que utilizamos maneja una serie de responsabilidades que no implica a otro

### O — Open-Closed
```javascript
console.table(undefined)
```
### L — Liskov Substitution
```javascript
console.table(undefined) cube, rec
```

### I — Interface Segregation
Cuando una clase tiene que cumplir muchos propositos

### D — Dependency Inversion


## Conceptos DDD aplicados
### Lenguaje Ubicuo: Ubiquitous Language
```javascript
export const getCommunities = async () => {
  const communitiesRef = firestore.collection("communities");
  ...
  
export const subscribeUserToCommunity = async (userId, communityId) => {
  const userRef = firestore.doc("users/" + userId);
  ...

export const createUserProfileDocument = async (userAuth, additionalData) => {
  ...
```
### Entidades (Entities).
En esta aplicacion los usuarios son las entidades, junto con las publicaciones y los comentarios que esta puede tener ya que todas estas mantienen un estado y comportamiento mas allá. 

### Objetos de valor (Value Objects).
Los tokens que utilizamos para iniciar o cerrar sesion

### Módulos (Modules).
Agrupando un numero de clases o componentes de react formamos modulos que luego podemos utilizarlos en conjunto para alguna funcionalidad.

### Agregados (Aggregates).
Los datos de la comunidad, post y multiples usuarios. Toda esa informacion se encuentra en los Posts ya que estas entidades son dependientes entre ella.

---
[redux]: https://redux.js.org/
[git]: https://git-scm.com/
[firebase]: https://firebase.google.com/
[nodejs]: https://nodejs.org/en/
[react]: https://reactjs.org/
[javascript]: https://www.javascript.com/
[sass]: https://sass-lang.com/
[css3]: https://developer.mozilla.org/en-US/docs/Archive/CSS3
[html5]: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5
[mui]: https://material-ui.com/

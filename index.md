---
marp: true
title: GitHub Actions
theme: base
size: 16:9
paginate: false
_paginate: false
---

<!-- _layout: intro -->
<!-- _footer: ![](assets/logos.png) -->
![bg](assets/home.png)

# GitHub Actions

🐙🧑‍🔧

---

<!-- _layout: one-row bg-code -->

# Automatiza, customiza, y ejecuta tu workflow en GitHub

![](assets/logo.png)

---

<!-- backgroundColor: #4E59F6  -->

<div class="animation1">

!!!include(animations/action_flow.svg)!!!

</div>

---

<!-- backgroundColor: #FFFFFF  -->
<!-- _class: nine-areas align-center  -->

<div class="area-1-3 text-center">
  <p class="paragraph-2 area-1-3 c-blue">Alternativas</p>
</div>
<div class="area-4 text-center" data-marpit-fragment>
  <img src="assets/jenkins.png"/>
</div>
<div class="area-5 text-center" data-marpit-fragment>
  <img src="assets/circle-ci.png"/>
</div>
<div class="area-6 text-center" data-marpit-fragment>
  <img src="assets/travis.png"/>
</div>
<div class="area-7 text-center" data-marpit-fragment>
  <img src="assets/bitrise.png"/>
</div>
<div class="area-9 text-center" data-marpit-fragment>
  <img height="60" src="assets/bamboo.png"/>
</div>

--- 

![bg contain](assets/pricing.png)

---


![bg contain](assets/pricing-travis.png)

---

<!-- _backgroundColor: #EDEDED -->
<!-- _class: nine-areas align-center  -->

<div class="area-4-6 flex-vertical justify-center align-center">
  <p class="paragraph-1 c-blue">¿Dónde encontrarlo?</p>
</div>
<div class="area-3 text-center z-index-10">
  <img height="227" src="assets/found.png"/>
</div>

---

<!-- _backgroundColor: #22272E -->

<div class="area-4-6 flex-vertical justify-center align-center">
  <p class="paragraph-2 c-blue">Integrado en tu repo</p>
</div>

<img src="assets/repo1.png"/>

---

<!-- _backgroundColor: #22272E -->

<div class="area-4-6 flex-vertical justify-center align-center">
  <p class="paragraph-2 c-blue">Integrado en cada commit</p>
</div>

<img src="assets/commit.png"/>

---

<!-- _backgroundColor: #22272E -->

<div class="area-4-6 flex-vertical justify-center align-center">
  <p class="paragraph-2 c-blue">Feedback automático</p>
</div>

<img src="assets/feedback.png"/>

---

<!-- _backgroundColor: #22272E -->

<div class="area-4-6 flex-vertical justify-center align-center">
  <p class="paragraph-2 c-blue">Información y logs detallados</p>
</div>

<img src="assets/logs.png"/>

---

<!-- _class: theme-intro -->

![bg](assets/home.png)

<div class="area-1-3 flex-vertical justify-center align-center">
  <p class="paragraph-1 c-secondary">Pero antes...</p>
</div>

<div class="area-8 flex-vertical align-bottom">
  <img src="assets/enigma.png"/>
</div>

---

<!-- _backgroundColor: #22272E -->
<!-- _class: nine-areas align-center  -->

<div class="area-4-6 flex-horizontal align-center justify-center">
  <img src="assets/enigma-small.png"/>
  <p class="paragraph-2 c-secondary">¿Qué es CI/CD?</p>
</div>

---

<!-- _backgroundColor: #22272E -->
<!-- _class: nine-areas align-center  -->

<div class="area-4-6 flex-horizontal align-center justify-center">
  <img src="assets/enigma-small.png"/>
  <p class="paragraph-2 c-secondary text-center">¿Es lo mismo hacer CI/CD que automatizar?</p>
</div>

---

<!-- _backgroundColor: #22272E -->
<!-- _class: nine-areas align-center  -->

<div class="area-4-6 flex-horizontal align-center justify-center">
  <img src="assets/enigma-small.png"/>
  <p class="paragraph-2 c-secondary text-center">¿Qué es compatibilidad hacia atrás o backward compatibility?</p>
</div>

---

<!-- _backgroundColor: #22272E -->
<!-- _class: nine-areas align-center  -->

<div class="area-4-6 flex-horizontal align-center justify-center">
  <img src="assets/enigma-small.png"/>
  <p class="paragraph-2 c-secondary text-center">¿Qué es Semantic Versioning?</p>
</div>

::: slideLink https://semver.org/ external-link-black
:::

---

<!-- _backgroundColor: #22272E -->

<div class="area-4-5 flex-horizontal align-center justify-center">
  <img height="325" src="assets/major.png"/>
  <div class="h100">
    <p class="paragraph-2 c-secondary text-center">Major</p>
    <p class="paragraph-3 c-secondary text-center">Cambio grande en la API que hace incompatible con versiones anteriores</p>
  </div>
</div>

---

<!-- _backgroundColor: #22272E -->

<div class="area-4-5 flex-horizontal align-center justify-center">
  <img height="325" src="assets/minor.png"/>
  <div class="h100">
    <p class="paragraph-2 c-secondary text-center">Minor</p>
    <p class="paragraph-3 c-secondary text-center">Cambio menor que mantiene compatibilidad hacia atrás</p>
  </div>
</div>

---

<!-- _backgroundColor: #22272E -->

<div class="area-4-5 flex-horizontal align-center justify-center">
  <img height="325" src="assets/pacth.png"/>
  <div class="h100">
    <p class="paragraph-2 c-secondary text-center">Patch</p>
    <p class="paragraph-3 c-secondary text-center">Parche, corrección de bugs, fixes menores</p>
  </div>
</div>

---

<!-- _class: theme-intro -->

![bg](assets/home.png)

<div class="area-1-3 flex-vertical justify-center align-center">
  <p class="paragraph-1 c-secondary">Conceptos básicos</p>
</div>

<div class="area-8 flex-vertical align-bottom">
  <img src="assets/basic.png"/>
</div>

---

<div class="flex-vertical margin-top-5x">
  <p class="paragraph-2 c-tertiary">Action</p>
</div>
<div class="flex-vertical gap-4x justify-center margin-top-2x">
  <p class="c-blue paragraph-3 emphasis">Es el <b>bloque portable</b> más pequeño</p>
  <img height="410" src="assets/action.png">
</div>

---

<div class="flex-vertical margin-top-5x">
  <p class="paragraph-2 c-tertiary">Artifact</p>
</div>
<div class="flex-vertical gap-4x justify-center margin-top-2x">
  <p class="c-blue paragraph-3 emphasis">Es el resultado, ficheros, paquetes, logs <b>generados</b> por los actions</p>
  <div class="big-emoji">📦</div>
</div>

---

<div class="flex-vertical margin-top-5x">
  <p class="paragraph-2 c-tertiary">Workflow</p>
</div>
<div class="flex-vertical gap-4x justify-center margin-top-2x">
  <p class="c-blue paragraph-3 emphasis">Es el <b>conjunto de acciones</b> ordenadas para realizar un propósito</p>
  <img height="410" src="assets/workflow.png">
</div>

---

<div class="flex-vertical margin-top-5x">
  <p class="paragraph-2 c-tertiary">Event</p>
</div>
<div class="flex-vertical gap-4x justify-center margin-top-2x">
  <p class="c-blue paragraph-3 emphasis">La actividad que <b>dispara</b> la ejecución de un workflow</p>
  <img height="410" src="assets/event.jpg">
</div>

---

<div class="flex-vertical margin-top-5x">
  <p class="paragraph-2 c-tertiary">Step</p>
</div>
<div class="flex-vertical justify-center margin-top-2x">
  <p class="c-blue paragraph-3">Cada uno de los pasos que se van ejecutando.</p>
  <p class="c-blue paragraph-3">Pueden ser <b>commands</b> o <b>actions</b></p>
  <img height="410" src="assets/step.jpg">
</div>

---

<div class="flex-vertical margin-top-5x">
  <p class="paragraph-2 c-tertiary">Job</p>
</div>
<div class="flex-vertical justify-center margin-top-2x">
  <p class="c-blue paragraph-3">Un <b>conjunto de steps</b> para ser ejecutados en un momento dado</p>
  <img height="410" src="assets/job.png">
</div>

---

<!-- backgroundColor: #FFFFFF  -->

<div class="animation1">

!!!include(animations/from-event.svg)!!!

</div>

---

<!-- _class: nine-areas align-center  -->

<p class="area-2 c-blue paragraph-2 text-center">Documentación</p>
<div class="justify-center area-5 margin-top">
  <img src="assets/documentation.png">
</div>

::: slideLink https://docs.github.com/en/actions external-link-black
:::

---

<!-- _class: theme-intro -->

![bg](assets/home.png)

<div class="area-4">
  <img src="assets/using.png"/>
</div>
<div class="area-5-6 flex-vertical justify-center align-start">
  <p class="paragraph-1 c-secondary">Usando Actions</p>
</div>

---

<div class="flex-vertical justify-center">
  <p class="paragraph-2 c-blue">Estructura</p>
  <img src="assets/folders.png"/>
</div>

---

<!-- class: invert -->
<!-- _backgroundColor: #2A2B2A -->
<div class="flex-vertical h100 justify-start">
<p class="area-2 c-blue paragraph-2 text-center">Estructura del Workflow</p>

<div class="flex-vertical h100 w100">
<div class="h100 w100">

```yml
name: Nombre del workflow
on: # Definición del event
jobs: # Definición de los jobs
```

</div>

<div class="h100 w100">

```yml
name: Hola mundo
on: [ push ]
jobs:
  build:
    name: Saludos
    runs-on: ubuntu-latest
    steps:
      - name: Hola mundo
        uses: actions/hello-world-javascript-action@v1
        with:
          who-to-greet: 'Mona the Octocat'
        id: hello
      - name: Echo con el tiempo transcurrido
        run: echo 'El tiempo transcurrido ha sido ${{ steps.hello.outputs.time }}.'
```

</div>

</div>
</div>

::: slideLink https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions external-link-black
:::

---

<!-- _backgroundColor: #22272E -->
<!-- _class: nine-areas align-center  -->

<div class="area-4-6 flex-horizontal align-center justify-center">
  <img src="assets/enigma-small.png"/>
  <p class="paragraph-2 c-secondary emphasis text-center">¿Cómo tengo que definir el <b>"on"</b> para que el workflow se lance después de cada push?</p>
</div>

---

<!-- _backgroundColor: #22272E -->
<!-- _class: invert -->

```yaml
on: [ push ]
on: push
```

<div class="area-4-6 flex-horizontal align-center justify-center">
  <img src="assets/enigma-small.png"/>
  <p class="paragraph-2 c-secondary emphasis text-center">¿Cómo tengo que definir el <b>"on"</b> para que el workflow se lance después de cada push?</p>
</div>

---

<!-- _backgroundColor: #22272E -->
<!-- _class: nine-areas align-center  -->

<div class="area-4-6 flex-horizontal align-center justify-center">
  <img src="assets/enigma-small.png"/>
  <p class="paragraph-2 c-secondary emphasis text-center">¿Qué tengo que hacer para que se lance un workflow después de un <b>comentario</b>?</p>
</div>

---

<!-- _backgroundColor: #22272E -->
<!-- _class: invert -->

```yaml
on:
  issue_comment:
    types:
      - created
```

<div class="area-4-6 flex-horizontal align-center justify-center">
  <img src="assets/enigma-small.png"/>
  <p class="paragraph-2 c-secondary emphasis text-center">¿Cómo tengo que definir el <b>"on"</b> para que el workflow se lance después de cada push?</p>
</div>

```yaml
on:
  issues:
    types:
      - opened
```

---

<!-- _backgroundColor: #22272E -->

<div class="area-4-6 flex-horizontal align-center justify-center">
  <img src="assets/enigma-small.png"/>
  <p class="paragraph-2 c-secondary emphasis text-center">Tengo un repo popular y me gustaría saber cuándo me hacen un <b>fork</b> ¿cómo tengo que poner el on del workflow?
</p>
</div>

---

<!-- _backgroundColor: #22272E -->

```yaml
on:
  fork
```

<div class="area-4-6 flex-horizontal align-center justify-center">
  <img src="assets/enigma-small.png"/>
  <p class="paragraph-2 c-secondary emphasis text-center">Tengo un repo popular y me gustaría saber cuándo me hacen un <b>fork</b> ¿cómo tengo que poner el on del workflow?
</p>
</div>

---

<!-- _backgroundColor: #22272E -->

<div class="area-4-6 flex-horizontal align-center justify-center">
  <img src="assets/enigma-small.png"/>
  <p class="paragraph-2 c-secondary emphasis text-center">En mi empresa usamos la <b>wiki</b> de github en los repos y queremos enviar a <b>slack un mensaje</b> cada vez que alguien haga un cambio en la wiki ¿cómo tengo que poner el on del workflow?
</p>
</div>

---

<!-- _backgroundColor: #22272E -->

```yaml
on:
  gollum
```

<div class="area-4-6 flex-horizontal align-center justify-center">
  <img src="assets/gollum.jpg"/>
  <p class="paragraph-2 c-secondary emphasis text-center">Tengo un repo popular y me gustaría saber cuándo me hacen un <b>fork</b> ¿cómo tengo que poner el on del workflow?
</p>
</div>

---

<!-- _backgroundColor: #22272E -->
<!-- _class: align-center  -->

<div class="flex-vertical align-center justify-center">
  <img src="assets/hero.png"/>

::: slideLink https://github-actions-hero.now.sh/ external-link-black
:::
</div>

---


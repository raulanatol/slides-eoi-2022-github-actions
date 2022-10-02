# Base slides

## Backgrounds

```md
<!-- _layout: bg-default -->
```

### bg-default

![](docs/backgrounds/default.png)

### bg-blue

![](docs/backgrounds/blue.png)

### bg-gray

![](docs/backgrounds/gray.png)

### bg-green

![](docs/backgrounds/green.png)

### bg-violet

![](docs/backgrounds/violet.png)

## Layouts

### Intro

```md
<!-- _layout: intro -->  
<!-- _footer: ![](assets/logos.png) -->  
![bg](assets/home.png)

# Intro

This is a content
```

![](docs/intro.png)

### Title-1

```md
<!-- _layout: title-1 -->

# This is the title with image

![](https://placeholder.pics/svg/450)
```

![bg](docs/title-1.png)

#### With image

Note: max height: 450

```md
<!-- _layout: title-1 -->

# This is the title with image

![](https://placeholder.pics/svg/450)
```

![bg](docs/title-1-withImage.png)

### Base-1

```md
<!-- _layout: base-1 -->  

# Base-1

Laborum ut **content**
```

![](docs/base1.png)

#### With image variant

```md
<!-- _layout: base-1 -->  

# Base-1 with image

![](assets/docker.png)
```

![](https://i.imgur.com/uziiSvZ.png)

### Fullimage

```md
![bg](assets/home.png)
```

![](docs/fullimage.png)

### two-columns-image-content

```md
<!-- _layout: two-columns-image-content -->

::: group content

Content

Content 2

Content 3

:::

![](assets/home.png)
```

#### variant-right

```md
<!-- _layout: two-columns-image-content variant-right -->

::: group content

Content

Variant right

Content 3

:::

![](assets/home.png)
```

### Vertical-one-column

```md

<!-- _layout: vertical-one-column -->  

# vertical-one-column

- One
- Two
- Three
- four
- five
- six
- seven
- eight
- nine
- ten

```

![](docs/vertical-one-column.png)

#### With image + content

```md

<!-- _layout: vertical-one-column -->  

## Base-1 with image and content

This is the content

![](assets/docker.png)
```

![](https://i.imgur.com/yC8MPHD.png)

### Vertical-two-columns

```md
<!-- _layout: vertical-one-column -->  

# Column1

This is the content

# Column 2

This is the content of column2

```

![](docs/vertical-two-columns.png)

### Vertical-two-columns-with-title

```md
<!-- _layout: vertical-two-columns-with-title -->

# Title

## Column1

This is the content

## Column2

This is the content of the column2

```

![](docs/vertical-two-columns-with-title.png)

### Wrap

```md
<!-- _layout: grid -->

# Title

![](assets/docker.png)![](assets/docker.png)![](assets/docker.png)![](assets/docker.png)

```

![](docs/grid.png)

# Icon

SVG inline de `public/icons`, sin JavaScript en el cliente. `name` selecciona
un nombre del registro tipado en `Icon.astro`. Los consumidores infieren el tipo
con `ComponentProps<typeof Icon>['name']`.

```astro
<div class="example__icon">
	<Icon name="rocket" />
</div>
```

```scss
.example
{
	&__icon
	{
		--icon-color: var(--color-text-on-light-muted);
		--icon-size: 32px;

		display: flex;
	}
}
```

`--icon-size` define la altura (24px por defecto); el ancho conserva la proporción
del `viewBox`. El color se hereda; `--icon-color` permite configurarlo sin cambiar
el texto del padre. El wrapper consumidor controla posición y alineación.

Sin `label`, el icono es decorativo (`aria-hidden="true"`). Para un icono con
significado independiente, usar `label` con una descripción localizada. En
botones y enlaces, el nombre accesible pertenece al control.

Para agregar un icono, preparar su SVG en `public/icons` e incorporarlo al
registro del átomo. Mantener `viewBox`, geometría y transparencias, usar
`currentColor` para colores visibles y preservar blancos/negros técnicos de
máscaras. Los identificadores de definiciones se vuelven únicos por instancia.
Los tres SVG derivados de Lucide conservan su licencia en
`public/icons/LICENSE-lucide.txt`.

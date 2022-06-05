export const routes = [
    {
        section: "Resúmen",
        title: "Panel",
        icon: "",
        groups: [
            {
                title: "Panel",
                icon: "",
                navs: []
            }]
    }, {
        section: "Administra tu tienda",
        title: "Mi tienda",
        icon: "",
        groups: [
            {
                title: "Productos",
                icon: "",
                navs: [{
                    to: "producto-listado",
                    label: "Listado"
                },
                {
                    to: "producto-nuevo",
                    label: "Crear nuevo"
                }]
            },
            {
                title: "Departamentos",
                icon: "",
                navs: [{
                    to: "departamento/todos",
                    label: "Listado"
                },
                ]
            },
            {
                title: "Categorías",
                icon: "",
                navs: [{
                    to: "/admin/categorias/todas",
                    label: "Listado"
                },
                ]
            },
            {
                title: "Mis bodegas",
                icon: "",
                navs: [{
                    to: "producto-listado",
                    label: "Listado"
                },
                ]
            },
            {
                title: "Mis tiendas",
                icon: "",
                navs: [{
                    to: "producto-listado",
                    label: "Listado"
                },
                ]
            },
        ]
    }]
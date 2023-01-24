const settings = {
  "name": "bioplast",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Bioplast",
      "description": "Innovative Packaging Solution"
    }
  },
  "packages": [
    {
      "name": "@awsmin/f1",
      "state": {
        "theme": {
          "menu": [
            {
              name: "Home",
              link: "/"
            },
            {
              name: "Profile",
              link: "/profile/"
            },
            {
              name: "Products",
              link: "/pet-chem-bottles/",
              submenu: [
                {
                  name: 'PET Chem Bottles',
                  link: '/pet-chem-bottles/'
                },
                {
                  name: 'PET Bottles',
                  link: '/pet-bottles/'
                },
                {
                  name: 'PET Jar & Cans',
                  link: '/pet-jar-cans/'
                },
                {
                  name: 'Food Container',
                  link: '/food-container/'
                },
                {
                  name: 'HDPE Bottles',
                  link: '/hdpe-bottles/'
                },
                {
                  name: 'HDPE Jerrycans',
                  link: '/hdpe-jerry-cans/'
                },
                {
                  name: 'PP Bucket & Pails',
                  link: '/pp-buckets-pails/'
                },
                {
                  name: 'Poultry Equipment',
                  link: '/poultry-equipment/'
                },
              ]
            },
            {
              name: "Career",
              link: "https://career.bioplast.co.id/"
            },
            {
              name: "Contact Us",
              link: "/contact-us/"
            }
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://wp.bioplast.co.id",
          "homepage": "/home",
          "postTypes": [
            {
              type: "product",
              endpoint: "product",
              archive: "/product"
            }
          ],

        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
}

export default settings

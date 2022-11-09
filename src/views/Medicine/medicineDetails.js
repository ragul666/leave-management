import React from 'react'
import Header from "../../layouts/header";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function Leave() {
  let role = localStorage.getItem("role");


  let data = [
    { "id": "0", "code": "f230fh0g3", "name": "Saughanthikaa", "description": "Product Description", "image": "bamboo-watch.jpg", "days": 1, "category": "Accessories", "quantity": 24, "inventoryStatus": "Approved", "rating": 5 },
    { "id": "01", "code": "nvklal433", "name": "Ragul", "description": "Product Description", "image": "black-watch.jpg", "days": 2, "category": "Accessories", "quantity": 61, "inventoryStatus": "Approved", "rating": 4 },
    { "id": "02", "code": "zz21cz3c1", "name": "test", "description": "Product Description", "image": "blue-band.jpg", "days": 4, "category": "Fitness", "quantity": 2, "inventoryStatus": "Rejected", "rating": 3 },
    { "id": "03", "code": "244wgerg2", "name": "louis", "description": "Product Description", "image": "blue-t-shirt.jpg", "days": 1, "category": "Clothing", "quantity": 25, "inventoryStatus": "Approved", "rating": 5 },
    { "id": "04", "code": "h456wer53", "name": "test2", "description": "Product Description", "image": "bracelet.jpg", "days": 1, "category": "Accessories", "quantity": 73, "inventoryStatus": "Rejected", "rating": 4 },
    { "id": "0", "code": "f230fh0g3", "name": "Saughanthikaa", "description": "Product Description", "image": "bamboo-watch.jpg", "days": 3, "category": "Accessories", "quantity": 24, "inventoryStatus": "Declined", "rating": 5 },
    { "id": "05", "code": "av2231fwg", "name": "chris", "description": "Product Description", "image": "brown-purse.jpg", "days": 2, "category": "Accessories", "quantity": 0, "inventoryStatus": "Rejected", "rating": 4 },
    { "id": "06", "code": "bib36pfvm", "name": " emp2", "description": "Product Description", "image": "chakra-bracelet.jpg", "days": 5, "category": "Accessories", "quantity": 5, "inventoryStatus": "Approved", "rating": 3 },
    { "id": "07", "code": "mbvjkgip5", "name": " adam", "description": "Product Description", "image": "galaxy-earrings.jpg", "days": 1, "category": "Accessories", "quantity": 23, "inventoryStatus": "Approved", "rating": 5 },
    { "id": "08", "code": "vbb124btr", "name": "rethik", "description": "Product Description", "image": "game-controller.jpg", "days": 7, "category": "Electronics", "quantity": 2, "inventoryStatus": "Rejected", "rating": 4 },
    { "id": "09", "code": "cm230f032", "name": "testdata", "description": "Product Description", "image": "gaming-set.jpg", "days": 3, "category": "Electronics", "quantity": 63, "inventoryStatus": "Approved", "rating": 3 }
  ]


  let data1 = [
    { "id": "0", "code": "f230fh0g3", "name": "Saughanthikaa", "description": "Product Description", "image": "bamboo-watch.jpg", "days": 1, "category": "Accessories", "quantity": 24, "inventoryStatus": "Approved", "rating": 5 },
    { "id": "0", "code": "f230fh0g3", "name": "Saughanthikaa", "description": "Product Description", "image": "bamboo-watch.jpg", "days": 3, "category": "Accessories", "quantity": 24, "inventoryStatus": "Declined", "rating": 5 },

     ]
  return (

    <div style={{ background: "#939393", paddingBottom: '20px' }}>
      <Header />
      {role === "superuser" && (
      <div style={{ width: '70%', marginLeft: '16rem' }}>
        <DataTable value={data} removableSort responsiveLayout="scroll">
          <Column field="id" sortable header="ID"></Column>
          <Column field="name" sortable header="Name"></Column>
          <Column field="days" sortable header="Leave Days"></Column>
          <Column field="inventoryStatus" sortable header="Status"></Column>
        </DataTable>
      </div>
      )}
      {role === "employee" && (
      <div style={{ width: '70%',marginBottom:'200px', marginLeft: '16rem' }}>
        <DataTable value={data1} removableSort responsiveLayout="scroll">
          <Column field="id" sortable header="ID"></Column>
          <Column field="name" sortable header="Name"></Column>
          <Column field="days" sortable header="Leave Days"></Column>
          <Column field="inventoryStatus" sortable header="Status"></Column>
        </DataTable>
      </div>
      )}
    </div>
  )
}

export default Leave

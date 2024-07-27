import axios from 'axios'
import './Home.css'
import React, { useEffect, useState } from 'react'
import { Table, Spinner, Container, Button } from 'react-bootstrap'

const Home = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const itemPerPage = 4;
    const currentPageLIndex = currentPage * itemPerPage; //1*4=4
    const currentPageFIndex = currentPageLIndex - itemPerPage;//4-4=0
    const pageItems = data.slice(currentPageFIndex, currentPageLIndex)
    const getData = async () => {
        const response = await axios.get('https://dummyjson.com/products')
        setData(response.data.products)
    }
    let pageNumbers=[]
    for(let i=0;i<=Math.floor(data.length/itemPerPage);i++){
        pageNumbers.push(i+1)
    }

    useEffect(() => {
        getData()
    }, [])
    // console.log(data)
    return (
        <>
            <Container>
                <Table responsive striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>description</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageItems.length > 0 ? pageItems.map(item => <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td><img src={item.thumbnail} style={{ height: '100px' }} alt="" /></td>
                            <td>{item.description}</td>
                        </tr>) :
                            <tr>
                                <td style={{ fontSize: '20px', fontWeight: '700' }}> Loading...<Spinner animation="border" variant='danger' /></td>
                            </tr>}
                    </tbody>
                </Table>
                <div>
                    <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>previous</Button>
                    {pageNumbers.map(pages=><Button key={pages} className={currentPage==pages?'btn-primary buttton-active':'btn-primary'} onClick={()=>setCurrentPage(pages)}>{pages}</Button>)}
                    <Button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPageLIndex > data.length}>next</Button> {/* 8*4>30  */}
                </div>
            </Container>
        </>
    )
}

export default Home

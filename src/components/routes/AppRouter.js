import { NavbarAdmin } from "../../shared/components/NavbarAdmin"
import { PublicNavbar } from "../../shared/components/PublicNavbar"

export const AppRouter = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/auth" element={<>Login Screen</>} />
                <Route path="/*" element={
                    !user.logged ? (
                        <> 
                            <PublicNavbar/> 
                            <Container style={{marginTop:"20px"}} className="mt5" >
                                <Routes>
                                    <Route path="/" element={<></>} />
                                    <Route path="/home" element={<>Home</>} />
                                    <Route path="/contact" element={<>Contacto</>} />
                                    <Route path="/info" element={<>Product info</>} />
                                </Routes>    
                            </Container> {""}
                        </>
                    ):(
                        <>
                            <NavbarAdmin/>
                            <Container style={{marginTop:"20px"}} className="mt5" >
                                <Routes>
                                    <Route path="products" element={<>Product</>} />
                                    <Route path="category" element={<>category</>} />
                                    <Route path="subcategory" element={<>subcategory</>} />
                                    <Route path="update-product/:key" element={<>ProductEdit</>} />
                                    <Route path="/home" element={<>Home product</>} />
                                    <Route index element={<>Product</>} />
                                    <Route path="*" element={<>Product</>} />
                                </Routes>    
                            </Container> 
                        </>
                    )
                } />
                <Route path="*" element={<>Product</>} />
            </Routes>
        </Router>
    )
}
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

export async function createProduct(product) {

    try {
        const response = await axios.post(`http://localhost:3000/products/`, product);
        console.log("response create", response.data)
        return response
    } catch (error) {
        console.error('Error creating product:', error);
        alert('Hubo un error al crear el producto. Por favor, inténtalo de nuevo.');
    }
}

export async function saveProduct(product) {

    try {
        const response = await axios.put(`http://localhost:3000/products/${product.id}`, {
            ...product
        });
        return response
    } catch (error) {
        console.error('Error updating product:', error);
        alert('Hubo un error al actualizar el producto. Por favor, inténtalo de nuevo.');
    }
}

export async function deleteProduct(productId) {
    try {
        await axios.delete(`http://localhost:3000/products/${productId}`);
        return true
    } catch (error) {
        console.error('Error deleting product:', error);
        alert('Hubo un error al eliminar el producto. Por favor, inténtalo de nuevo.');
    }
}

export async function fetchProducts() {
    try {
        const response = await axios.get('http://localhost:3000/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}


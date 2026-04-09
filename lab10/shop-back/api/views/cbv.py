from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from api.models import Category, Product
from api.serializers import CategorySerializer, ProductSerializer


# PRODUCTS

class ProductListAPIView(APIView):

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductDetailAPIView(APIView):

    def get_object(self, product_id):
        try:
            return Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return None

    def get(self, request, product_id):
        product = self.get_object(product_id)
        if not product:
            return Response({'error': 'Not found'}, status=404)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, product_id):
        product = self.get_object(product_id)
        if not product:
            return Response({'error': 'Not found'}, status=404)

        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, product_id):
        product = self.get_object(product_id)
        if not product:
            return Response({'error': 'Not found'}, status=404)

        product.delete()
        return Response(status=204)


# CATEGORIES

class CategoryListAPIView(APIView):

    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class CategoryDetailAPIView(APIView):

    def get_object(self, id):
        try:
            return Category.objects.get(id=id)
        except Category.DoesNotExist:
            return None

    def get(self, request, id):
        category = self.get_object(id)
        if not category:
            return Response({'error': 'Not found'}, status=404)
        serializer = CategorySerializer(category)
        return Response(serializer.data)

    def put(self, request, id):
        category = self.get_object(id)
        if not category:
            return Response({'error': 'Not found'}, status=404)

        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, id):
        category = self.get_object(id)
        if not category:
            return Response({'error': 'Not found'}, status=404)

        category.delete()
        return Response(status=204)


class CategoryProductsAPIView(APIView):

    def get(self, request, id):
        try:
            category = Category.objects.get(id=id)
        except Category.DoesNotExist:
            return Response({'error': 'Not found'}, status=404)

        products = category.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
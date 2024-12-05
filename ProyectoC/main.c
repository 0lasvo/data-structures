#include <stdio.h>
#include <stdlib.h>
#include <time.h>

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

void bubbleSort(int arr[], int n);
void insertionSort(int arr[], int n);
void selectionSort(int arr[], int n);
void quickSort(int arr[], int low, int high);
int partition(int arr[], int low, int high);
void treeSort(int arr[], int n);

struct Node* createNode(int data);
struct Node* insert(struct Node* node, int data);
void inOrderTraversal(struct Node* root, int arr[], int* index);

void printArray(int arr[], int n);
void generateRandomArray(int arr[], int n);

int main() {
    int choice, size;

    while (1) {
        printf("\n=== MENU ===\n");
        printf("1. Bubble Sort\n");
        printf("2. Insertion Sort\n");
        printf("3. Selection Sort\n");
        printf("4. Quick Sort\n");
        printf("5. Tree Sort\n");
        printf("6. Salir\n");
        printf("Seleccione una opcion: ");
        scanf("%d", &choice);

        if (choice == 6) {
            printf("Saliendo del programa...\n");
            break;
        }

        printf("Ingrese el tamano de la estructura: ");
        scanf("%d", &size);

        int arr[size];
        generateRandomArray(arr, size);

        printf("\nArreglo desordenado:\n");
        printArray(arr, size);

        switch (choice) {
            case 1:
                bubbleSort(arr, size);
                break;
            case 2:
                insertionSort(arr, size);
                break;
            case 3:
                selectionSort(arr, size);
                break;
            case 4:
                quickSort(arr, 0, size - 1);
                break;
            case 5:
                treeSort(arr, size);
                break;
            default:
                printf("Opcion no valida.\n");
                continue;
        }

        printf("\nArreglo ordenado:\n");
        printArray(arr, size);
    }

    return 0;
}

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        int temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return (i + 1);
}

void treeSort(int arr[], int n) {
    struct Node* root = NULL;
    for (int i = 0; i < n; i++) {
        root = insert(root, arr[i]);
    }
    int index = 0;
    inOrderTraversal(root, arr, &index);
}

struct Node* createNode(int data) {
    struct Node* node = (struct Node*)malloc(sizeof(struct Node));
    node->data = data;
    node->left = NULL;
    node->right = NULL;
    return node;
}

struct Node* insert(struct Node* node, int data) {
    if (node == NULL) return createNode(data);
    if (data < node->data) {
        node->left = insert(node->left, data);
    } else if (data > node->data) {
        node->right = insert(node->right, data);
    }
    return node;
}

void inOrderTraversal(struct Node* root, int arr[], int* index) {
    if (root != NULL) {
        inOrderTraversal(root->left, arr, index);
        arr[(*index)++] = root->data;
        inOrderTraversal(root->right, arr, index);
    }
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

void generateRandomArray(int arr[], int n) {
    srand(time(0));
    for (int i = 0; i < n; i++) {
        arr[i] = rand() % 100;
    }
}

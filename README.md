# 🧠 CropAI – Backend (Flask + TensorFlow)

This is the backend inference API for **CropAI**, a crop disease detection system built using deep learning.

The Flask server loads a trained `.h5` TensorFlow model and provides a `/predict` API to receive an image and return the predicted disease class.

---

## 🧠 Model Details

- Trained on: [PlantVillage Dataset](https://www.kaggle.com/datasets/emmarex/plantdisease)
- Number of classes: 38
- Input size: 224x224 RGB
- Format: Keras `.h5`

---

## 🔧 Tech Stack

- Python 3.10
- Flask
- TensorFlow / Keras
- OpenCV
- NumPy

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Balu19104/cropai-backend.git
cd cropai-backend

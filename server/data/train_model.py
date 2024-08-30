import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error
import joblib

# Load the preprocessed data
df = pd.read_csv('preprocessed_train_data.csv')

# Select features and target
X = df[['latitude', 'longitude', 'scheduled_hour', 'scheduled_day', 'scheduled_month']]
y = df['delay']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate the model
predictions = model.predict(X_test)
mae = mean_absolute_error(y_test, predictions)
print(f"Mean Absolute Error: {mae} minutes")

# Save the model
joblib.dump(model, 'delay_predictor.pkl')

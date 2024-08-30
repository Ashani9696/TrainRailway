import pandas as pd
import numpy as np
import random
from datetime import datetime, timedelta

# Number of mock records to generate
n_records = 1000

# Function to generate mock data
def generate_mock_data(n):
    data = []
    for _ in range(n):
        engine_id = random.randint(1, 10)
        route = random.choice(['Route A', 'Route B', 'Route C'])
        latitude = np.random.uniform(-90, 90)
        longitude = np.random.uniform(-180, 180)
        scheduled_arrival = datetime.now() + timedelta(minutes=random.randint(0, 1000))
        actual_arrival = scheduled_arrival + timedelta(minutes=random.randint(-10, 30))
        data.append([engine_id, route, latitude, longitude, scheduled_arrival, actual_arrival])

    df = pd.DataFrame(data, columns=['engine_id', 'route', 'latitude', 'longitude', 'scheduled_arrival', 'actual_arrival'])
    return df

# Generate data and save to CSV
df = generate_mock_data(n_records)
df.to_csv('train_data.csv', index=False)

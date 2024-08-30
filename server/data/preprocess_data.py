import pandas as pd

# Load the data
df = pd.read_csv('train_data.csv')

# Convert 'scheduled_arrival' and 'actual_arrival' to datetime format
df['scheduled_arrival'] = pd.to_datetime(df['scheduled_arrival'])
df['actual_arrival'] = pd.to_datetime(df['actual_arrival'])

# Calculate delay (difference in minutes between actual and scheduled arrival)
df['delay'] = (df['actual_arrival'] - df['scheduled_arrival']).dt.total_seconds() / 60.0

# Extract useful features from 'scheduled_arrival'
df['scheduled_hour'] = df['scheduled_arrival'].dt.hour
df['scheduled_day'] = df['scheduled_arrival'].dt.day
df['scheduled_month'] = df['scheduled_arrival'].dt.month

# Drop unnecessary columns
df = df.drop(columns=['actual_arrival', 'scheduled_arrival'])

# Save the preprocessed data
df.to_csv('preprocessed_train_data.csv', index=False)

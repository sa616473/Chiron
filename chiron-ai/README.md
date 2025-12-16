
### Data sets
| Category                      | Dataset                                                              | Description                                                            | Why it matters                                               |
| ----------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------ |
| 🗣️ Clinical Interviews       | **DAIC-WOZ / E-DAIC**                                                | Depression diagnosis dialogues with PHQ-8 scores and audio transcripts | Benchmark for depressive speech patterns & empathy detection |
| 🪞 Self-reported journals     | **CLPsych Shared Task (Reddit Depression, Anx, PTSD)**               | Anonymized Reddit posts labeled for mental health                      | Great for emotion & risk-signal classifiers                  |
| ❤️ Emotion labeling           | **GoEmotions (Google)**                                              | 58k Reddit comments labeled with 27 fine-grained emotions              | Perfect for emotion classification fine-tuning               |
| 🌈 Daily reflections          | **EmpatheticDialogues (Facebook)**                                   | 25k conversations grounded in emotional situations                     | For empathy, tone-shifting, reframe generation               |
| 🧩 Mood diaries               | **DailyDialog**                                                      | Human-like conversations tagged for emotion, intent, and polarity      | Used for conversation summarization & mood trajectory        |
| 💬 Suicide ideation detection | **Suicide Risk Reddit Dataset** / **UMD Reddit Suicidality Dataset** | Posts labeled by suicidality risk level                                | Critical for safety-signal detection                         |
| 🧍‍♀️ Therapist–patient       | **CounselChat**                                                      | Real Q&A from therapists on mental health topics                       | For context-aware language modeling (how therapists respond) |
| 🧍‍♂️ Personality & Affect    | **Dreaddit**                                                         | Reddit dataset labeled for stress levels                               | Used for stress scoring pipeline                             |
| 🪶 Sentiment & tone           | **Sentiment140 / SST-2 / TweetEval**                                 | Classical sentiment corpora                                            | For baselines and calibration                                |



### Pre-trained Models

| Task                            | Model                                                                           | Source         | Why                                             |
| ------------------------------- | ------------------------------------------------------------------------------- | -------------- | ----------------------------------------------- |
| **Emotion detection**           | `joeddav/distilbert-base-uncased-go-emotions-student`                           | Hugging Face   | Compact, well-calibrated for 27 emotion labels  |
| **Sentiment**                   | `cardiffnlp/twitter-roberta-base-sentiment-latest`                              | HF (TweetEval) | High accuracy on conversational tone            |
| **Mental health detection**     | `bert-base-uncased-finetuned-mental-health` (by samuelcortinhas / others)       | HF             | Detects depression/anxiety markers              |
| **Empathy & tone**              | `microsoft/DialoGPT-medium` + `facebook/empathetic_dialogues` fine-tune         | HF             | Generates empathetic reflections                |
| **Risk/Suicidality**            | `clpsych-roberta` (from CLPsych challenge) or IBM Granite Guardian (enterprise) | IBM / HF       | Detects self-harm or ideation text              |
| **Topic extraction**            | `allenai/scibert_scivocab_uncased` + `BERTopic`                                 | HF + BERTopic  | For theme discovery (relationships, work, etc.) |
| **Summarization**               | `facebook/bart-large-cnn` or `t5-large`                                         | HF             | To produce concise therapist briefs             |
| **Emotion trajectory tracking** | `j-hartmann/emotion-english-distilroberta-base`                                 | HF             | Lightweight for running on journaling text      |
| **Multilingual future support** | `XLM-Roberta`                                                                   | HF             | Handles cross-language diaries                  |

For this assignment, I continued with the strawberry theme. However, in this drawing, since there were no other elements, I added some light and shadow to make the picture less monotonous. Initially, I wanted to use vintage fashion illustrations as the final output medium, but during the subsequent training, I encountered some limitations, so I changed my strategy.

Drawing:
In this study, I created an anthropomorphic strawberry and used AI to recognize some facial features, so the generated strawberry could vary according to each person's facial features.

The shape of the face affects the shape of the strawberry. This way, not only does the strawberry shape change with each sample, but in video mode, as the face turns left and right, it also creates an almost 3D effect. However, it is actually just a simple 2D graphic.

The shape of the leaves is related to the shape of the bridge and tip of the nose, the size of the mouth depends on how wide the person opens their mouth in the picture, and when the person’s eyes are open, they appear as big, watery eyes. When half-open or closed, the eyes appear relaxed. To find a reference among these variables, the nose is kept as a constant value.

Training:
During training, I found that because the samples were all from fashion magazines, most of the photos had similar expressions, with few showing squinted or relaxed eyes. This prevented me from training the AI to switch between different functions based on facial expressions. Additionally, the mouths and smiles were very standardized, and these celebrities' appearances mostly belonged to "standard faces" with not much distinctiveness, making the strawberry shape variations less noticeable. If the training samples were more representative of ordinary people, I think it would be more interesting and I could do more.
Moreover, I found that the AI could not recognize faces with closed eyes, which rendered my function for switching eye shapes completely ineffective. I did use half-open eyes during training, but there were only a few photos with such expressions, so the training volume was insufficient.

Summary:
The learning process this time was quite interesting for me. However, my drawing style is relatively cartoonish and flat, so if the training photos were more diverse, I believe I could produce more differentiated results.


import imageio.v3 as iio      #reader and writer of image data

print(iio)

filenames = ['img_1.png', 'img_2.png','img_3.png','img_4.png','img_5.png']
images = []

for filename in filenames:
    images.append(iio.imread(filename))

iio.imwrite('GIF.gif', images, duration = 300, loop = 100)
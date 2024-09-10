import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Href, router } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const OnBoarding = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const isLastSlide = activeIndex === onboarding.length - 1;

    return (
        <SafeAreaView className="flex h-full items-center justify-between bg-white">
            <TouchableOpacity
                onPress={() => router.replace('/(auth)/sign-up' as Href)}
                className="w-full flex justify-end items-end p-5"
            >
                <Text className="text-black text-md font-JakartaBold">Skip</Text>
            </TouchableOpacity>

            <Swiper
                ref={swiperRef}
                loop={false}
                dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />}
                activeDot={<View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />}
                onIndexChanged={(index) => setActiveIndex(index)}
            >
                {onboarding.map(item => (
                    <View className="flex items-center justify-center p-5" key={item.id}>
                        <Image source={item.image} className="w-full h-[300px]" resizeMode="contain" />
                        <View className="flex flex-row items-center w-full mt-10">
                            <Text className="text-black text-3xl font-bold mx-[17px] text-center">{item.title}</Text>
                        </View>
                        <Text className="text-md font-JakartaSemiBold text-center mx-10 mt-3 text-gray-500">{item.description}</Text>
                    </View>
                ))}
            </Swiper>

            <CustomButton
                title={isLastSlide ? 'Gest Started' : 'Next'}
                onPress={() => isLastSlide ? router.replace('/(auth)/sign-up') : swiperRef.current?.scrollBy(1) }
                className="w-11/12 mt-10"
            />
        </SafeAreaView>
    )
}

export default OnBoarding;
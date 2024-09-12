import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { FlatList, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Page() {
    const { user } = useUser()

    return (
        <SafeAreaView className='bg-general-500'>
            {/* <FlatList data={} renderItem={}/> */}
        </SafeAreaView>
    )
}
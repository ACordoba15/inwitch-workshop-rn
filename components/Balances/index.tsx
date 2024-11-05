import { FlatList, Text, TextInput, View } from "react-native";
import {styled} from "@gluestack-style/react"
import {Spinner} from "@gluestack-ui/themed"
import useGetBalance from "@/hooks/useGetBalance";
import { entityMaster } from "@/utils/constant";
import CardBalance from "../CardBalance";
import React, { useState } from "react";

const WalletMasterBalance = () => {
	const { balance, loading, error } = useGetBalance(entityMaster);
    const [input, setInput] = useState<string>("");
   

    const filteredData = balance.filter((item: any) => {
        if (input === '') {
          return balance;
        } 
        else {
          return item.paymentMethodReference.toLowerCase().includes(input)
        }
      })

	return(
		<Container>
			{loading && <Spinner size={"small"} />}
			{error && <Text>Error: {error.message}</Text>}
            <TextInput
                    placeholder="Filtrar"
                    value={input}
                    onChangeText={setInput}
                    style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginBottom: 10,
                    paddingHorizontal: 10
                    }}
                />
                <TextWrapper>
					Total de registros: {filteredData.length}
				</TextWrapper>
            
			<FlatList
				showsVerticalScrollIndicator={false}
				data={filteredData}
				renderItem={({ item }) => (
					<CardBalance {...item} />
				)}
				keyExtractor={(item) => item.paymentMethodReference}
			/>
		</Container>
	)
}

const Container = styled(View, {
	display: "flex",
	flex: 1,
	width: "$full",
	flexDirection: "column",
	m: "$5",
	p: "$5",
	bg: "$backgroundLight150",
	rounded: "$xl",
	borderWidth: "$1",
	borderColor: "$borderLight300",
})

const TextWrapper = styled(Text, {
	color: "$black",
	_dark: {
		color: "$white",
	}
})


export default WalletMasterBalance
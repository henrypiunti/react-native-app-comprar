import AsyncStorage from "@react-native-async-storage/async-storage";
import { ItemType } from "@/types/Items";
import { FilterStatus } from "@/enums/FilterStatus";

const ITEMS_STORAGE_KEY = "@comprar:items";

async function get(): Promise<ItemType[]> {
  try {
    const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY);

    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw new Error("ITEMS_GET: " + error);
  }
}

async function getByStatus(status: FilterStatus): Promise<ItemType[]> {
  const items = await get();

  return items.filter((item) => item.status === status);
}

async function save(items: ItemType[]): Promise<void> {
  try {
    await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    throw new Error("ITEMS_SAVE: " + error);
  }
}

async function add(newItem: ItemType): Promise<ItemType[]> {
  const items = await get();
  const updatedItems = [...items, newItem];
  await save(updatedItems);

  return updatedItems;
}

async function remove(id: string): Promise<void> {
  const items = await get();
  const updatedItems = items.filter((item) => item.id !== id);
  await save(updatedItems);
}

async function clear(): Promise<void> {
  try {
    await AsyncStorage.removeItem(ITEMS_STORAGE_KEY);
  } catch (error) {
    throw new Error("ITEMS_CLEAR: " + error);
  }
}

async function toggleStatus(id: string): Promise<void> {
  const items = await get();
  const updatedItems = items.map((item) =>
    item.id === id
      ? {
          ...item,
          status:
            item.status === FilterStatus.PENDING
              ? FilterStatus.DONE
              : FilterStatus.PENDING,
        }
      : item
  );

  await save(updatedItems);
}

export const itemsStorage = {
  get,
  getByStatus,
  add,
  remove,
  clear,
  toggleStatus,
};

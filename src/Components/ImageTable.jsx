export default function ImageTable() {
    const rows = [
        { title: "آداب المسجد", img: "/card1.jpg" },
        { title: "أذكار الصباح والمساء", img: "/card2.jpg" },
        { title: "صلة الرحم", img: "/card4.jpg" },
    ];

    return (
        <div className="overflow-x-auto mt-10" dir="rtl">
            <table className="min-w-full text-right font-tajawal">
                <thead>
                    <tr>
                        <th className="py-2 px-4 text-[#c38f33] text-lg">دروس دينية</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, idx) => (
                        <tr key={idx} className="transition">
                            <td className="py-3 px-4 gap-4 flex items-center space-x-0 rtl:space-x-reverse">
                                <img
                                    src={row.img}
                                    alt={row.title}
                                    className="w-14 h-14 object-cover rounded-md"
                                />
                                <span className="text-[#444] text-base">{row.title}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
